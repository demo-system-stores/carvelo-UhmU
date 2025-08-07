# Adding 3rd Party Address Lookup Integration

This guide explains how to override any field in address forms on checkout to extend it and integrate 3rd party services. As an example, we demonstrate how to replace the default address field with a custom one and integrate Google API for Address Lookup functionality.

## Steps to Integrate 3rd Party Address Lookup

### 1. Identify the Container and Override the Default Field

Locate the required container in the `commerce-checkout.js` block. The same approach works for both `Addresses` and `AddressForm` containers:
- **Addresses container**: Used when customers have saved addresses.
- **AddressForm container**: Used when no addresses are saved.

To override the `street` field in the `AddressForm` container for the shipping address, pass the `AddressFormInput_street` slot parameter. Here’s how you remove the default field:

```js
shippingForm = await AccountProvider.render(AddressForm, {
  // Other parameters
  slots: {
    AddressFormInput_street: async (ctx) => {
    },
  },
});
```

Use a function to create and render a custom input field. Below is an example using the Input component from the @dropins/tools package:

### 2. Define a Function to Generate the Custom Field Markup

This is plain JS code used to generate markup for new input. In this example we using Input component provided by dropin tools package (make sure to add appropriate import - `import { Input } from '@dropins/tools/components.js';`).
Callback destructure from `context` passed into slot from container allowing to make custom input fully functional and integrated with form.
As a result of these changes default input will be replcaed by custom one matching general look & feel but not functional yet.
```js
const generateMarkup = async (context) => {
  const { inputName, handleOnChange, handleOnBlur, handleOnFocus, config } = context;

  const wrapper = document.createElement('div');
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('dropin-field__hint', 'dropin-field__hint--medium', 'dropin-field__hint--error');
  errorContainer.style.display = 'none';

  const inputComponent = await UI.render(Input, {
    name: inputName,
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    onFocus: handleOnFocus,
    floatingLabel: `${config.label} *`,
    placeholder: config.label,
  })(wrapper);

  wrapper.appendChild(errorContainer);
  ctx.appendChild(wrapper);

  return { inputElement: wrapper.querySelector('input'), inputComponent, errorContainer };
};

const markupElements = await generateMarkup(ctx);
```

This replaces the default input field with a custom one that matches the design but lacks functionality.

### 3. Replicate Default Functionality for the Custom Input

Make the custom input fully functional by using the onChange callback provided by the slot context. This enables validation and integration with the form:

```js
const handleStateChange = (next, { inputElement, inputComponent, errorContainer }) => {
  const { errorMessage, errors, handleOnChange, handleOnBlur } = next;

  const getNextProps = (prev, error) => ({
    ...prev,
    error,
    onChange: (e) => handleOnChange(e, errors),
    onBlur: (e) => handleOnBlur(e, errors),
  });

  if (errorMessage) {
    errorContainer.innerText = errorMessage;
    errorContainer.style.display = 'block';
    inputComponent.setProps((prev) => getNextProps(prev, true));
  } else {
    errorContainer.innerText = '';
    errorContainer.style.display = 'none';
    inputComponent.setProps((prev) => getNextProps(prev, false));
  }

  if (document.activeElement === inputElement) {
    setTimeout(() => inputElement.focus(), 0);
  }
};

ctx.onChange((nextState) => handleStateChange(nextState, markupElements));
```

### 4. Enable Google Address Lookup Integration

Add the Google Places API to the checkout page:

```js
const scriptUrl = 'https://maps.googleapis.com/maps/api/js?key={GOOGLE_API_KEY}&loading=async&libraries=places';


if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
 const script = document.createElement('script');
 script.src = scriptUrl;
 script.async = true;
 document.head.appendChild(script);
}
```

Initialize the Google Autocomplete API for the custom field:

```js
const initAutocomplete = (inputElement) => {
  const autocompleteEl = new google.maps.places.Autocomplete(inputElement, {
    types: ['address'],
    fields: ['address_components'],
  });

  autocompleteEl.addListener('place_changed', () => {
    const place = autocompleteEl.getPlace();
    const addressComponents = place.address_components;

    let street = '', city = '', countryCode = '';

    addressComponents.forEach((component) => {
      if (component.types.includes('route')) street = component.long_name;
      if (component.types.includes('locality') || component.types.includes('sublocality')) city = component.long_name;
      if (component.types.includes('country')) countryCode = component.short_name;
    });

    document.getElementById('country_code').value = countryCode;
    document.getElementById('street').value = street;
    document.getElementById('city').value = city;
  });
};

initAutocomplete(markupElements.inputElement);
```

### 5. Final fully functional code

```js
shippingForm = await AccountProvider.render(AddressForm, {
  addressesFormTitle: 'Shipping address',
  className: 'checkout-shipping-form__address-form',
  formName: SHIPPING_FORM_NAME,
  forwardFormRef: shippingFormRef,
  hideActionFormButtons: true,
  inputsDefaultValueSet: cartShippingAddress ?? {
    countryCode: storeConfig.defaultCountry,
  },
  isOpen: true,
  onChange: (values) => {
    const syncAddress = !isFirstRenderShipping || !hasCartShippingAddress;
    if (syncAddress) setShippingAddressOnCart(values);
    if (!hasCartShippingAddress) estimateShippingCostOnCart(values);
    if (isFirstRenderShipping) isFirstRenderShipping = false;
  },
  showBillingCheckBox: false,
  showFormLoader: false,
  showShippingCheckBox: false,
  slots: {
    AddressFormInput_street: async (ctx) => {
      const generateMarkup = async (context) => {
        const {
          inputName,
          handleOnChange,
          handleOnBlur,
          handleOnFocus,
          config,
        } = context;

        const wrapper = document.createElement('div');

        const errorContainer = document.createElement('div');
        errorContainer.classList.add(...['dropin-field__hint', 'dropin-field__hint--medium', 'dropin-field__hint--error']);
        errorContainer.style.display = 'none';

        const inputComponent = await UI.render(Input, {
          name: inputName,
          onChange: handleOnChange,
          onBlur: handleOnBlur,
          onFocus: handleOnFocus,
          floatingLabel: `${config.label} *`,
          placeholder: config.label,
        })(wrapper);
        const inputElement = wrapper.querySelector('input');
        wrapper.appendChild(errorContainer);
        ctx.appendChild(wrapper);

        return { inputElement, inputComponent, errorContainer };
      };

      const markupElements = await generateMarkup(ctx);

      const handleStateChange = (next, { inputElement, inputComponent, errorContainer }) => {
        const {
          errorMessage,
          errors,
          handleOnChange,
          handleOnBlur,
        } = next;

        const getNextProps = ({ value, ...prev }, error) => ({
          ...prev,
          error,
          onChange: (e) => handleOnChange(e, errors),
          onBlur: (e) => handleOnBlur(e, errors),
        });

        if (errorMessage) {
          errorContainer.innerText = errorMessage;
          errorContainer.style.display = 'block';
          inputComponent.setProps((prev) => getNextProps(prev, true));
        } else {
          errorContainer.innerText = '';
          errorContainer.style.display = 'none';
          inputComponent.setProps((prev) => getNextProps(prev, false));
        }

        if (document.activeElement === inputElement) {
          setTimeout(() => {
            inputElement.focus();
          }, 0);
        }
      };

      ctx.onChange((nextState) => handleStateChange(nextState, markupElements));

      const initAutocomplete = (inputElement) => {
        const autocompleteEl = new google.maps.places.Autocomplete(inputElement, {
          types: ['address'],
          fields: ['address_components'],
        });

        let streetInput = null;
        let cityInput = null;
        let countrySelect = null;

        function onPlaceChanged() {
          const place = autocompleteEl.getPlace();
          const addressComponents = place.address_components;

          // Initialize variables for street, city, and country code
          let street = '';
          let city = '';
          let countryCode = '';

          addressComponents.forEach((component) => {
            if (component.types.find((type) => type === 'route')) {
              street = component.long_name;
            } else if (component.types.find((type) => type === 'locality' || type === 'sublocality')) {
              city = component.long_name;
            } else if (component.types.find((type) => type === 'country')) {
              countryCode = component.short_name;
            }
          });

          if (!countrySelect) {
            countrySelect = document.getElementById('country_code');
          }

          countrySelect.value = countryCode;
          countrySelect.dispatchEvent(new Event('change'));

          setTimeout(() => {
            if (!streetInput) {
              streetInput = document.getElementById('street');
            }

            if (!cityInput) {
              cityInput = document.getElementById('city');
            }

            streetInput.value = street;
            streetInput.dispatchEvent(new Event('change'));

            cityInput.value = city;
            cityInput.dispatchEvent(new Event('change'));
          }, 2000);
        }

        autocompleteEl.addListener('place_changed', onPlaceChanged);
      };

      initAutocomplete(markupElements.inputElement);
    },
  },
})($shippingForm);
```

### Notes

- Replace `{GOOGLE_API_KEY}` with your actual API key. Refer to [Google API Documentation](https://developers.google.com/maps/documentation/javascript/get-api-key) for details.
- The implementation supports backend-configurable validation and full form submission integration.

By following these steps, you can successfully override fields and integrate 3rd party address lookup functionality into your checkout process.