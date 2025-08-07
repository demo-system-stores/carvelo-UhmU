/* eslint-disable no-underscore-dangle, import/no-unresolved */

import 'https://da.live/nx/public/sl/components.js';
import getStyle from 'https://da.live/nx/utils/styles.js';
import {
  LitElement, html, nothing,
} from 'da-lit';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js';
import { createSite, SITE_CREATION_STATUS } from './create-site.js';
import { createGitHubRepo, createOctokit } from './github-utils.js';

const style = await getStyle(import.meta.url);

// Firebase configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB9MzwnYDIl7G7OjOIDS94FxRQJWz9mF4w',
  authDomain: 'rugh-gh-auth.firebaseapp.com',
  projectId: 'rugh-gh-auth',
  storageBucket: 'rugh-gh-auth.firebasestorage.app',
  messagingSenderId: '1046226538217',
  appId: '1:1046226538217:web:d04c52133c2d5c488cea78',
  measurementId: 'G-7TBPY9SHWV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
githubProvider.addScope('public_repo');

class SiteCreator extends LitElement {
  static properties = {
    _data: { state: true },
    _loading: { state: true },
    _status: { state: true },
    _time: { state: true },
    _publishStatus: { state: true },
    _githubToken: { state: true },
    _githubUser: { state: true },
    _repoCreated: { state: true },
    _appInstalled: { state: true },
    _siteName: { state: true },
    _orgName: { state: true },
    _repoMode: { state: true },
    _installLinkClicked: { state: true },
  };

  async connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.adoptedStyleSheets = [style];
    this._repoMode = 'new'; // Default to new repository mode
    this._installLinkClicked = false;

    // Check for existing token in session storage
    const savedToken = sessionStorage.getItem('github_token');
    if (savedToken) {
      this._githubToken = savedToken;
      // Get user info with the saved token
      try {
        const octokit = createOctokit(savedToken);
        const { data: user } = await octokit.request('GET /user');
        this._githubUser = user;
        // Set initial site name and org name for new repository mode
        this._siteName = 'my-storefront';
        this._orgName = user.login;
      } catch (error) {
        // If token is invalid, clear it
        sessionStorage.removeItem('github_token');
        this._githubToken = null;
        this._githubUser = null;
        console.warn('Invalid GitHub token', error);
      }
    }

    // Listen for auth state changes
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // Only update token and user if we don't already have them
        if (!this._githubToken) {
          const credential = GithubAuthProvider.credentialFromResult(firebaseUser);
          if (credential) {
            this._githubToken = credential.accessToken;
            sessionStorage.setItem('github_token', credential.accessToken);

            // Get GitHub user info
            const octokit = createOctokit(credential.accessToken);
            const { data: user } = await octokit.request('GET /user');
            this._githubUser = user;
            // Set initial site name and org name for new repository mode
            this._siteName = 'my-storefront';
            this._orgName = user.login;
          }
        }
      }
    });
  }

  async handleGitHubLogin() {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      // Get the GitHub access token from the credential
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        this._githubToken = credential.accessToken;
        // Save token to session storage
        sessionStorage.setItem('github_token', credential.accessToken);

        // Get GitHub user info
        const octokit = createOctokit(credential.accessToken);
        const { data: user } = await octokit.request('GET /user');
        this._githubUser = user;
        // Set initial site name and org name
        this._siteName = 'my-storefront';
        this._orgName = user.login;
      } else {
        throw new Error('Failed to get GitHub access token');
      }
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        // Handle the case where the user already has an account with a different provider
        this._status = { type: 'error', message: 'An account already exists with the same email address but different sign-in credentials.' };
      } else {
        this._status = { type: 'error', message: 'Failed to authenticate with GitHub' };
      }
    }
  }

  async createGitHubRepo() {
    try {
      this._loading = true;
      this._repoCreated = false;
      this._appInstalled = false;

      const setStatus = (status) => { this._status = status; };
      const result = await createGitHubRepo(
        this._githubToken,
        setStatus,
        this._siteName,
        this._orgName,
      );
      this._repoCreated = result.repoCreated;
      this._data = {
        ...this._data,
        org: result.owner,
        repo: result.repo,
      };
      return result;
    } catch (error) {
      if (error.message === 'EXISTING_FORK') {
        const forkUrl = error.forkUrl || 'UNKNOWN_FORK_URL';
        this._status = {
          type: 'error',
          message: html`You already have a fork of this repository at
            <a href="${forkUrl}" target="_blank">${forkUrl}</a>.
            GitHub only allows one fork per user. You can either:<br>
            <br>1. Use your existing fork at <a href="${forkUrl}" target="_blank">${forkUrl}</a>
            <br>2. Delete your existing fork and try again
            <br><br>To delete your fork, go to
            <a href="${forkUrl}/settings" target="_blank">${forkUrl}/settings</a>
            and scroll to the bottom to find the "Delete this repository" option.`,
          isHtml: true,
        };
      } else if (error.message === 'REPOSITORY_EXISTS' || error.message === 'PERMISSION_DENIED') {
        // Status already set in the try block
      } else {
        this._status = { type: 'error', message: `Failed to create GitHub repository: ${error.message}` };
      }
      throw error;
    } finally {
      this._loading = false;
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this._repoMode === 'new' && !this._githubToken) {
      await this.handleGitHubLogin();
      return;
    }

    this._time = null;
    this._loading = true;
    let intervalId;

    try {
      const startTime = Date.now();
      intervalId = setInterval(() => {
        this._time = SiteCreator.calculateCrawlTime(startTime);
      }, 100);

      if (this._repoMode === 'new') {
        // Create GitHub repository
        await this.createGitHubRepo();
        this._status = { type: 'success', message: `Repository created in ${SiteCreator.calculateCrawlTime(startTime)}.` };
      } else {
        // For existing repository, proceed directly to site creation
        this._data = {
          ...this._data,
          org: this._orgName,
          repo: this._siteName,
        };

        // Continue with site creation for existing repository mode
        const setStatus = (status) => { this._status = status; };
        this._publishStatus = await createSite(this._data, setStatus);
        this._status = { type: 'success', message: 'Site created successfully!' };
        this._appInstalled = true; // Set app installed to true for existing repository mode
      }
    } catch (err) {
      if (err.message !== 'EXISTING_FORK') {
        this._status = { type: 'error', message: err.message };
      }
    } finally {
      this._loading = false;
      if (intervalId) clearInterval(intervalId);
    }
  }

  async handleAppInstallation() {
    this._appInstalled = true;
    // Continue with the rest of the process
    this._time = null;
    this._loading = true;
    let intervalId;

    try {
      const startTime = Date.now();
      intervalId = setInterval(() => {
        this._time = SiteCreator.calculateCrawlTime(startTime);
      }, 100);

      const setStatus = (status) => { this._status = status; };
      this._publishStatus = await createSite(this._data, setStatus);
      this._status = { type: 'success', message: `Site creation completed in ${SiteCreator.calculateCrawlTime(startTime)}.` };
    } catch (err) {
      this._status = ({ type: 'error', message: err.message });
    } finally {
      this._loading = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }

  static calculateCrawlTime(startTime) {
    const crawlTime = Date.now() - startTime;
    return `${String(crawlTime / 1000).substring(0, 4)}s`;
  }

  formChanged(e) {
    const input = e.target;
    const value = input.value.toLowerCase();
    input.value = value; // Update the input field with lowercase value

    try {
      const url = new URL(value);
      const org = url.pathname.split('/')[1];
      const repo = url.pathname.split('/')[2];

      if (org && repo && url.hostname === 'github.com') {
        this._status = null;
        this._data = { org, repo };
      }
    } catch (error) {
      // Do not error when user is typing the url - validation happens on submit.
    }
  }

  renderFstab() {
    return html`
      <code><pre>
mountpoints:
  /:
    url: https://content.da.live/${this._data.org}/${this._data.repo}/
    type: markup
      </pre></code>
    `;
  }

  renderSiteComplete() {
    return html`
      <div class="success-panel">
        <h2>Edit content</h2>
        <p>Your site has been copied and published. Click the links to edit your content.</p>
        <p><a href="https://da.live/edit#/${this._data.org}/${this._data.repo}/nav" target="_blank">Edit main navigation</a></p>
        <p><a href="https://da.live/edit#/${this._data.org}/${this._data.repo}/footer" target="_blank">Edit footer</a></p>
        <p><a href="https://da.live/#/${this._data.org}/${this._data.repo}" target="_blank">View all content</a></p>
      </div>
      <div class="success-panel">
        <h2>View site</h2>
        <p><a href="https://main--${this._data.repo}--${this._data.org}.aem.page" target="_blank">Visit site</a></p>
      </div>
      <p class="status ${this._status.type || 'note'}">${this._status.message}</p>
    `;
  }

  renderNoCodeBus() {
    return html`
      <div class="success-panel">
        <h2>Content copied successfully</h2>
        <p>Your content has been copied.</p>
      </div>
      <div class="success-panel">
        <h2>Install Code Sync</h2>
        <p>Your site does not appear synced to the code bus yet. Please configure the code bus for your site by <a href="https://github.com/apps/aem-code-sync/installations/new">following these steps.</a></p>
      </div>
      <div class="success-panel">
        <h2>View your content</h2>
        <p><a href="https://da.live/#/${this._data.org}/${this._data.repo}" target="_blank">View all content</a></p>
      </div>
      <p class="status ${this._status.type || 'note'}">${this._status.message}</p>
    `;
  }

  renderNoFstab() {
    return html`
      <div class="success-panel">
        <h2>Content copied successfully</h2>
        <p>Your content has been copied.</p>
      </div>
      <div class="success-panel">
        <h2>Update fstab</h2>
        <p>Your site's fstab does not seem to point to the new content yet. Please update it to the value below.</a></p>
        ${this.renderFstab()}
      </div>
      <div class="success-panel">
        <h2>View your content</h2>
        <p><a href="https://da.live/#/${this._data.org}/${this._data.repo}" target="_blank">View all content</a></p>
      </div>
      <p class="status ${this._status.type || 'note'}">${this._status.message}</p>
    `;
  }

  renderSuccess() {
    if (this._publishStatus === SITE_CREATION_STATUS.NO_CODE_BUS) {
      return this.renderNoCodeBus();
    }
    if (this._publishStatus === SITE_CREATION_STATUS.NO_FSTAB) {
      return this.renderNoFstab();
    }
    return this.renderSiteComplete();
  }

  renderForm() {
    return html`
      <form @submit=${this.handleSubmit}>
        <div class="form-group">
          <label>Repository Mode:</label>
          <div class="radio-group">
            <label>
              <input type="radio" name="repoMode" value="new"
                ?checked=${this._repoMode === 'new'}
                @change=${(e) => {
    this._repoMode = e.target.value;
    if (this._githubUser) {
      this._orgName = this._githubUser.login;
      this._siteName = 'my-storefront';
    }
  }}>
              Create New Repository
            </label>
            <label>
              <input type="radio" name="repoMode" value="existing"
                ?checked=${this._repoMode === 'existing'}
                @change=${(e) => {
    this._repoMode = e.target.value;
    if (this._githubUser) {
      this._orgName = this._githubUser.login;
      this._siteName = 'my-storefront';
    }
  }}>
              Use Existing Repository
            </label>
          </div>
        </div>

        ${this._repoMode === 'new' && !this._githubToken ? html`
          <button type="button" @click=${this.handleGitHubLogin}>
            Login with GitHub
          </button>
        ` : html`
          <div class="form-group">
            <label for="orgName">Organization/Username:</label>
            <input type="text" id="orgName" name="orgName"
              .value=${this._orgName || ''}
              placeholder=${this._repoMode === 'existing' ? 'my-org' : ''}
              @input=${(e) => { this._orgName = e.target.value; }}
              required
              ?disabled=${this._loading}>
          </div>

          <div class="form-group">
            <label for="siteName">Repository Name:</label>
            <input type="text" id="siteName" name="siteName"
              .value=${this._siteName || ''}
              placeholder=${this._repoMode === 'existing' ? 'my-storefront' : ''}
              @input=${(e) => { this._siteName = e.target.value; }}
              required
              ?disabled=${this._loading}>
          </div>

          ${(this._repoCreated && !this._appInstalled) ? html`
            <div class="app-installation-panel">
              <h3>Install AEM Code Sync App</h3>
              <p>Your repository has been created. Please install the AEM Code Sync app to continue. Make sure to select "Only select repositories"!</p>
              <p><a href="https://github.com/apps/aem-code-sync/installations/select_target" target="_blank" @click=${() => { this._installLinkClicked = true; }}>Install AEM Code Sync App</a></p>
              <button
                type="button"
                ?disabled=${this._loading || !this._installLinkClicked}
                @click=${this.handleAppInstallation}
              >
                ${this._loading ? 'Processing...' : 'Continue'}
              </button>
            </div>
          ` : html`
            <div class="form-footer">
              <div class="time-actions">
                <p>${this._time || ''}</p>
                <button type="submit" ?disabled=${this._loading}>
                  ${this._loading ? 'Creating...' : 'Create Site'}
                </button>
              </div>
            </div>
          `}
        `}
        ${this._status ? html`<p class="status ${this._status?.type || 'note'}">${this._status?.message}</p>` : nothing}
      </form>
    `;
  }

  render() {
    // Only show success view if we have data AND a success status AND app is installed
    if (this._data && this._status?.type === 'success' && this._appInstalled) {
      return this.renderSuccess();
    }
    return this.renderForm();
  }
}

customElements.define('da-site-creator', SiteCreator);
