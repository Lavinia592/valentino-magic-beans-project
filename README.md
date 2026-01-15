# 🧪 Valentino Magic Beans Project

This repository contains an **end-to-end (E2E) testing suite** built with **Playwright** and **TypeScript**.  

The project automates key user flows such as **signup, login, and navigating products, API mock** for the Valentino Magic Beans web application.

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
│    ├── basic/
│    │    ├── Cart.spec.ts        # Adding items in the cart.
│    ├── pages/                  # Page Object Model files
│    │    ├── Cart.ts             # Asserting a product and getting the subtotal of a product.
│    │    ├── Checkout.ts         # Contains data for Contact info, Shippment address and Payment info.
│    │    ├── Contact.ts          # Contains data for filling an Order Id and Email.
│    │    ├── Login.ts            # Contains data for Login.
│    │    ├── Product.ts          # Adding to cart a specific product having a specific price. 
│    │    └── SignUp.ts           # Contains data for Signing Up and grabbing confirmation code from MailSlurp for creating an account. 
│    ├── requests/
│    │    ├── 1ApiIntercept.spec.ts      # Printing API call and Mock data using API. 
│    │    └── 2ResourceBlock.spec.ts     # Blocking resources like images from a page.
     ├── utils/
│         └── EmailUtils.ts    # Class for handling email operations with MailSlurp API
│    ├── auth-flow.spec.ts       # Authentification flow using Email.
│    └── product-flow.spec.ts    # The product flow - adding product to cart, proceed to checkout and place order using POM files from pages/.
│    
└── playwrigth/.auth/
    └── loginData.json     # File ignored, contain sensitive data such as email and password for login flow.
```

## ⚙️ Technologies Used

- **Playwright** – Browser automation and testing  
- **TypeScript** – Type-safe JavaScript  
- **MailSlurp API** – Temporary email inbox for testing signups  
- **Node.js** – Runtime environment  
- **npm** – Dependency management  

## 🌐 Website used
https://valentinos-magic-beans.click/

