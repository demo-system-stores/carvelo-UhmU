/* eslint-disable import/no-unresolved */
// Dropin Tools
import { events } from '/scripts/__dropins__/tools/event-bus.js';
import { setEndpoint } from '/scripts/__dropins__/tools/fetch-graphql.js';
import { initializers } from '/scripts/__dropins__/tools/initializer.js';

// Libs
import { getConfigValue } from './configs.js';

export default async function initializeDropins() {
  // Set Fetch Endpoint (Global)
  setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // Mount all registered dropins
  if (document.readyState === 'complete') {
    initializers.mount();
  } else {
    window.addEventListener('load', initializers.mount);
  }

  events.enableLogger(true);
}
