# 🧪 Valentino Magic Beans Project

This repository contains an **end-to-end (E2E) testing suite** built with **Playwright** and **TypeScript**.  
The project automates key user flows such as **signup, login, and navigation** for the Valentino Magic Beans web application.

It also integrates **MailSlurp** to manage temporary email inboxes for signup verification testing.

$tree
```bash

## 📁 Project Structure

valentino-magic-beans-project/
│
├── package.json
├── package-lock.json
├── playwright.config.ts
├── node_modules/
├── README.md
├── tests/
│   ├── auth-flow.spec.ts       # Authentification flow
│   ├── product-flow.spec.ts    # The product flow - adding product to cart, proceed to checkout and place order.
│   └── otherTests.test.ts      # Future test cases
│
├── utils/
│   └── EmailUtils.ts    # Class for handling email operations with MailSlurp API
│
├── pages/
│   ├── Cart.ts          # Typescript file for asserting a product and geting the subtotal of a product.
│   ├── Checkout.ts      # Contains used data for filling a form.
│   ├── Contact.ts       # Typescript file for filling the name and the order id.
│   ├── Login.ts         # Login flow.
│   ├── Products.ts      # Adding product to cart.
│   └── Signup.ts        # Contains data for singup and confirmation code.
└── basic/
    └── Cart.spec.ts     # Test for adding product to cart.

## ⚙️ Technologies Used

- **Playwright** – Browser automation and testing  
- **TypeScript** – Type-safe JavaScript  
- **MailSlurp API** – Temporary email inbox for testing signups  
- **Node.js** – Runtime environment  
- **npm** – Dependency management  


```
