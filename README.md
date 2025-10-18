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
├── tsconfig.json
├── playwright.config.ts
├── README.md
│
└── TESTS/
├── tests/
│ ├── signup.test.ts # Tests signup flow with email verification
│ ├── login.test.ts # Tests login functionality
│ └── otherTests.test.ts # Future test cases
│
├── utils/
│ └── EmailUtils.ts # Class for MailSlurp email operations
│
├── data/
│ ├── userData.ts # Contains test data (email, username, password)
│ └── config.ts # Environment configs and URLs
│
└── fixtures/
└── example.json # Optional mock data or static files
```
