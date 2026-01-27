# Actito GO

## Supported custom events

Use the built-in custom events to create and experiment with automations! 🤖

| Event                         | Description                                                       |
|-------------------------------|-------------------------------------------------------------------|
| `page_viewed.home`            | Submitted when the home tab is displayed.                         |
| `page_viewed.cart`            | Submitted when the cart tab is displayed.                         |
| `page_viewed.settings`        | Submitted when the settings tab is displayed.                     |
| `page_viewed.inbox`           | Submitted when the inbox is displayed.                            |
| `page_viewed.user_profile`    | Submitted when the user profile is displayed.                     |
| `page_viewed.events`          | Submitted when the events builder is displayed.                   |
| `page_viewed.products`        | Submitted when the products list is displayed.                    |
| `page_viewed.product_details` | Submitted when the product details is displayed.                  |
| `add_to_cart`                 | Submitted when the user adds a product to the cart. &#x00B9;      |
| `remove_from_cart`            | Submitted when the user removes a product from the cart. &#x00B9; |
| `cart_updated`                | Submitted when the cart is updated. &#x00B2;                      |
| `cart_cleared`                | Submitted when the cart is cleared.                               |
| `purchase`                    | Submitted when the user completes a purchase. &#x00B2;            |
| `product_viewed`              | Submitted when the user view the details of a product. &#x00B9;   |

&#x00B9; Data object includes a `ProductRepresentation`.

&#x00B2; Data object includes a `ProductsOverviewRepresentation`.

### Event data schemas

##### `ProductRepresentation`

```
{
  id: String
  name: String
  price: Double
  price_formatted: String
}
```

##### `ProductsOverviewRepresentation`

```
{
  total_price: Double
  total_price_formatted: String
  total_items: Int
  products: Array<ProductRepresentation>
```

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd actito-go-web`
- `npm install`

## Running / Development

- `npm run start`
- Visit your app at [http://localhost:4303](http://localhost:4303).
- Visit your tests at [http://localhost:4303/tests](http://localhost:4303/tests).

### Code Generators

Make use of the many generators for code, try `npm exec ember help generate` for more details

### Running Tests

- `npm run test`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `npm exec vite build --mode development` (development)
- `npm run build` (production)

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [Vite](https://vite.dev)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
