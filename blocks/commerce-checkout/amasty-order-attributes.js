import {fetchGraphQl} from "@dropins/tools/fetch-graphql.js";

const sdkStyle = document.querySelector('style[data-dropin="sdk"]');
const checkoutStyle = document.querySelector('style[data-dropin="checkout"]');

const SET_CART_ATTRIBUTE = `
    mutation SET_CART_ATTRIBUTES($cartId: String!, $dateTime: String!) {
        saveAmOrderattrValues(cartId:$cartId, orderAttributes: {
            attribute_code: "ddate",
            value: $dateTime
        }) {
            cart {
                id
                amorder_attributes {
                    attribute_code
                    value
                }
            }
            user_errors
        }
    }
`;

function formatDateTime(datetime) {
    const date = new Date(datetime);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, '0');

    return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
}

function convertToDatetimeLocal(value) {
    const [date, time, period] = value.split(/[\s]+/);

    let [year, month, day] = date.split('-');
    let [hours, minutes] = time.split(':');

    if (period.toLowerCase() === 'pm' && hours !== '12') {
        hours = String(parseInt(hours, 10) + 12);
    } else if (period.toLowerCase() === 'am' && hours === '12') {
        hours = '00';
    }

    return `${year}-${month}-${day}T${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
}

class AmastyOrderAttributes extends HTMLElement {
    
  _orderAttributes = [];
  _loading = true;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set orderAttributes(value) {
    this._orderAttributes = value;

    if(!value) return;

    const deliveryDateInput = this.shadowRoot.querySelector(
        'input[name="deliveryDate"]'
        );

    const deliveryDate = this._orderAttributes.find(
        (attribute) => attribute.attribute_code === "ddate"
    );

    if (deliveryDate && deliveryDate.value) {
        deliveryDateInput.setAttribute("value", convertToDatetimeLocal(deliveryDate.value));
    }
  }

  connectedCallback() {
    this.render();

    const deliveryDateInput = this.shadowRoot.querySelector(
      'input[name="deliveryDate"]'
    );

    const deliveryDate = this._orderAttributes.find(
        (attribute) => attribute.attribute_code === "ddate"
        );
    
    deliveryDate && deliveryDate.value && deliveryDateInput.setAttribute("value", convertToDatetimeLocal(deliveryDate.value));

    deliveryDateInput.addEventListener("change", (event) => {
      deliveryDateInput.setAttribute('disabled', '');
      console.log("delivery date changed", event.target.value);
      const value = event.target.value;
      const cartId = this.getAttribute("cartId");

      fetchGraphQl(SET_CART_ATTRIBUTE, { variables: { cartId, dateTime: formatDateTime(value) } }).then(() => {
        deliveryDateInput.removeAttribute('disabled');
      });
    });
  }

  render() {
    const sdkStyleElement = sdkStyle.cloneNode(true);
    const checkoutStyleElement = checkoutStyle.cloneNode(true);
    const style = document.createElement("style");
    style.innerText = `
            .amasty-order-attributes__title {
                color: var(--color-neutral-800);
                font: var(--type-headline-2-default-font);
                letter-spacing: var(--type-headline-2-default-letter-spacing);
                margin: 0 0 var(--spacing-medium) 0;
            }
            .amasty-order-attributes__delivery-date-label {
                display: block;
                margin: 0 0 var(--spacing-small) 0;
            }
        `;

    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
            <h2 class="amasty-order-attributes__title">Order Attributes</h2>
            <div class="amasty-order-attributes__attribute">
                <label class="amasty-order-attributes__delivery-date-label" for="deliveryDate">Delivery Date</label>
                <input type="datetime-local" class="dropin-input dropin-input--primary dropin-input--medium" name="deliveryDate"/>
            </div>
        `;

    this.shadowRoot.appendChild(sdkStyleElement);
    this.shadowRoot.appendChild(checkoutStyleElement);
    this.shadowRoot.appendChild(style);
  }
}

customElements.define("amasty-order-attributes", AmastyOrderAttributes);

export default {
  render: (container, props) => {
    const amastyOrderAttributes = document.createElement(
      "amasty-order-attributes"
    );
    container.replaceChildren(amastyOrderAttributes);

    return amastyOrderAttributes;
  },
};
