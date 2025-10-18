# valentino-magic-beans-project
## E2E Testing Project (TypeScript)
This project is an end-to-end (E2E) testing suite built with TypeScript.
It includes automated test cases for key user flows such as signup, login, and navigation, and uses MailSlurp for testing email-based scenarios (e.g., account verification).

TESTS/
│
├── tests/
│   ├── auth-flow.spec.ts       # Authentification flow
│   ├── product-flow.spec.ts        # The flow of adding product to cart, proceed to checkout and place order.
│   └── otherTests.test.ts   # Future test cases
│
├── utils/
│   └── EmailUtils.ts        # Class for handling email operations with MailSlurp API
│
├── pages/
│   ├── Cart.ts          # Typescript file for asserting a product and geting the subtotal of a product.
│   ├── Checkout.ts      # Contains used data for filling a form.
│   ├── Contact.ts       # Typescript file for filling the name and the order id.
│   ├── Login.ts         # Login flow.
│   ├── Products.ts      # Adding product to cart.
│   └── Signup.ts        # Contains data for singup and confirmation code.
└── basic/
    └── Cart.spec.ts         # Test for adding product to cart.

## Technologies Used

TypeScript

Playwright

MailSlurp API (for email verification in signup tests)

Node.js

npm (for dependency management)


