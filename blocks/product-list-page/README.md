# Product List Page Block

## Overview

The Product List Page block provides a comprehensive product discovery interface that displays search results or category product listings with filtering, sorting, and pagination capabilities. It integrates Adobe Commerce's Product Discovery dropins with wishlist and cart functionality.

## Purpose

- Display products from search queries or category pages
- Provide faceted search/filtering capabilities
- Enable product sorting and pagination
- Integrate wishlist and add-to-cart functionality
- Handle URL parameters for deep linking to search states

## Configuration

The block accepts the following configuration options via block metadata:

| Option | Description | Example |
|--------|-------------|---------|
| `urlpath` | Category URL path for category pages | `gear/bags` |

### Example Configuration

```
| Metadata |
| --- |
| urlpath | gear/bags |
```

## URL Parameters

The block reads and updates the following URL parameters:

- `q` - Search query phrase
- `page` - Current page number (default: 1)
- `sort` - Sort criteria (format: `attribute_direction`, e.g., `price_ASC`)
- `filter` - Applied filters (format: `attribute:value|attribute:value`)

### Filter Format

**Single value:**
```
filter=color:blue
```

**Multiple values (in):**
```
filter=color:blue,red
```

**Range values:**
```
filter=price:10-50
```

**Multiple filters:**
```
filter=color:blue|price:10-50
```

## Behavior

### Category Pages
When `urlpath` is configured:
- Displays all products in the specified category
- Uses position-based sorting by default (DESC)
- Filters by `categoryPath` and visibility

### Search Pages
When no `urlpath` is configured:
- Uses the `q` URL parameter as the search phrase
- Displays search results matching the query
- Filters by visibility only

### Pagination
- Page size: 8 products per page
- Scrolls to top of page on page change
- Updates URL with current page number

### Faceted Navigation
- Mobile-responsive facets panel
- Toggle button shows/hides facets on mobile
- Filter count badge on toggle button
- Filters update URL parameters

### Product Actions
- **Simple products:** Direct "Add to Cart" button
- **Complex products:** Button links to product detail page
- Wishlist toggle for all products
- AEM Assets image integration

## Integration Details

### Dropins Used
- `@dropins/storefront-product-discovery` - Search, facets, sorting, pagination
- `@dropins/storefront-wishlist` - Wishlist toggle
- `@dropins/storefront-cart` - Add to cart functionality

### Required Initializers
- `scripts/initializers/search.js`
- `scripts/initializers/wishlist.js`

### Events

**Subscribed:**
- `search/result` (eager: true) - Updates result count and UI before render
- `search/result` (eager: false) - Updates URL parameters after render

**Event Payload Structure:**
```javascript
{
  request: {
    phrase: string,
    currentPage: number,
    sort: Array<{ attribute: string, direction: string }>,
    filter: Array<{ attribute: string, in?: string[], range?: { from: number, to: number } }>
  },
  result: {
    totalCount: number,
    // ... other result data
  }
}
```

## User Interaction Flows

### Search Flow
1. User enters search query in site search
2. Page loads with `q` parameter
3. Block executes search with phrase
4. Results displayed with facets, sort, and pagination
5. User interactions update URL and trigger new searches

### Filter Flow
1. User opens facets panel (mobile) or views facets (desktop)
2. User selects filter option(s)
3. Search executes with new filters
4. Results update
5. URL updated with filter parameters
6. Filter count badge shows number of active filters

### Add to Cart Flow
1. User clicks "Add to Cart" on simple product
2. Product added to cart via API
3. For complex products, user redirected to PDP

## Error Handling

### Search Errors
- Logs error to console: "Error searching for products"
- Does not block UI rendering
- Empty state displayed if no results

### Empty State
- Block receives class `product-list-page--empty` when `totalCount === 0`
- Result info shows "0 results found" message

## Customization Points

### Slots

**ProductImage:**
- Renders AEM Assets images if available
- Falls back to Commerce product images
- Wrapped in link to product detail page

**ProductActions:**
- Container for add-to-cart and wishlist buttons
- Can be customized via slot replacement

### Styling Hooks
- `.search__wrapper` - Main container
- `.search__result-info` - Result count message
- `.search__view-facets` - Mobile facets toggle
- `.search__facets` - Facets panel
- `.search__facets--visible` - Visible facets state
- `.search__product-sort` - Sort dropdown
- `.search__product-list` - Product grid
- `.search__pagination` - Pagination controls
- `.product-list-page--empty` - Empty state
- `.product-discovery-product-actions` - Product action buttons container
- `.product-discovery-product-actions__add-to-cart` - Add to cart button
- `.product-discovery-product-actions__wishlist-toggle` - Wishlist button

## Technical Notes

- Uses `readBlockConfig()` for metadata parsing
- Integrates with Commerce placeholder system for labels
- Supports both category and search page types
- URL state management via History API
- Visibility filter ensures only searchable products shown
