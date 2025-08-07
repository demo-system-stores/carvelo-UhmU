# Aligning Address Form Layout on Checkout

This guide explains how to align the address form layout on the checkout page using CSS.

## Steps to Customize the Layout:

### 1. Apply a Two-Column Layout (Default 50% Width)

To set all fields to a two-column layout with 50% width, use the following CSS:

```css
.checkout__main .account-address-form div.dropin-field {
    grid-column: span 1;
}
```

### 2. Configure Specific Fields to Full Width

To make specific fields span the full width (100%), target them using their `--attribute_code` modifier. Update the layout according to design requirements with this CSS:
```css
.checkout__main .account-address-form div.account-address-form__field--company,
.checkout__main .account-address-form div.account-address-form__field--country_code,
.checkout__main .account-address-form div.account-address-form__field--vat_id {
    grid-column: span 2;
}
```

By following these steps, address form layout can be easily customisable to meet requirements.
