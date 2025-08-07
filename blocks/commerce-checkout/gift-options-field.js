import { Button, Input, TextArea, provider as UI } from '@dropins/tools/components.js';

const sdkStyle = document.querySelector('style[data-dropin="sdk"]');
const checkoutStyle = document.querySelector('style[data-dropin="checkout"]');

class GiftOptionsField extends HTMLElement {
    static observedAttributes = ['cartid', 'giftmessage', 'fromname', 'toname', 'loading'];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this._submitGiftMessageHandler = (event) => {
            event.preventDefault();
        }
    }

    set submitGiftMessageHandler(callback) {
        this._submitGiftMessageHandler = callback;
    }

    connectedCallback() {
        this._formTemplate = document.createElement('template');

        this._formTemplate.innerHTML = `
            <h2 class="checkout-payment-methods__title">Gift Message</h2>
            <form id="gift-options-form" class="checkout-fields-form__form">
                <div class="fromName-wrapper"></div>
                <div class="toName-wrapper"></div>
                <div class="giftMessage-wrapper dropin-field dropin-field--multiline"></div>
                <input type="hidden" name="cartId" />
                <div class="submit-wrapper"></div>
            </form>
        `;

        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const toName = this.shadowRoot.querySelector('input[name="toName"]');
        const fromName = this.shadowRoot.querySelector('input[name="fromName"]');
        const giftMessage = this.shadowRoot.querySelector('textarea[name="giftMessage"]');
        const cartId = this.shadowRoot.querySelector('input[name="cartId"]');

        switch (name) {
            case 'cartid':
                cartId.value = newValue;
                break;
            case 'giftmessage':
                giftMessage.value = newValue;
                break;
            case 'fromname':
                fromName.value = newValue;
                break;
            case 'toname':
                toName.value = newValue;
                break;
            case 'loading':
                if (newValue) {
                    toName?.setAttribute('disabled', '');
                    fromName?.setAttribute('disabled', '');
                    giftMessage?.setAttribute('disabled', '');
                } else {
                    toName?.removeAttribute('disabled');
                    fromName?.removeAttribute('disabled');
                    giftMessage?.removeAttribute('disabled');
                }
                break;
        }
    }

    render() {
        this.shadowRoot.innerHTML = '';

        this.shadowRoot.appendChild(this._formTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('input[name="cartId"]').value = this.getAttribute('cartId');
        this.shadowRoot.querySelector('#gift-options-form').addEventListener('submit', this._submitGiftMessageHandler?.bind(this));

        const submitWrapper = this.shadowRoot.querySelector('.submit-wrapper');
        const fromNameWrapper = this.shadowRoot.querySelector('.fromName-wrapper');
        const toNameWrapper = this.shadowRoot.querySelector('.toName-wrapper');
        const giftMessageWrapper = this.shadowRoot.querySelector('.giftMessage-wrapper');

        UI.render(Input, 
            {
                type: "text",
                name: "toName",
                placeholder: "To name",
                floatingLabel: "To name",
                value: this.getAttribute('toName'),
                disabled: !!this.hasAttribute('loading')
            })(toNameWrapper);
        UI.render(Input, 
            {
                type: "text",
                name: "fromName",
                placeholder: "From name",
                floatingLabel: "From name",
                value: this.getAttribute('fromName'),
                disabled: !!this.hasAttribute('loading')
            })(fromNameWrapper);
        UI.render(TextArea, 
            {
                name: "giftMessage",
                placeholder: "Message",
                value: this.getAttribute('giftMessage'),
                disabled: !!this.hasAttribute('loading')
            })(giftMessageWrapper);
        UI.render(Button, 
            {
                variant: "primary",
                children: "Add Message",
                type: "submit",
                enabled: true,
                size: "medium",
                disabled: !!this.hasAttribute('loading')
            })(submitWrapper);

        this.shadowRoot.appendChild(sdkStyle.cloneNode(true));
        this.shadowRoot.appendChild(checkoutStyle.cloneNode(true));
    }
}

customElements.define('gift-options-field', GiftOptionsField);