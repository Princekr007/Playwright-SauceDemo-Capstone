# Playwright SauceDemo Capstone

## Project Overview

This project is an End-to-End Automation Framework developed using Playwright with JavaScript for the SauceDemo application.

The framework follows the Page Object Model (POM) design pattern and covers Login, Products, Product Details, Cart, Checkout, Mobile Testing, Network Simulation, API Mocking, Accessibility Validation, Security Validation, Reporting, and CI/CD integration.

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* GitHub Actions

---

## Framework Design

Page Object Model (POM) is implemented using:

* LoginPage
* ProductsPage
* CartPage
* CheckoutPage

Test data is maintained separately in the `test-data` folder to support data-driven testing and improve maintainability.

---

## Project Structure

```text
Playwright-SauceDemo-Capstone
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── src
│   └── pages
│       ├── LoginPage.js
│       ├── ProductsPage.js
│       ├── CartPage.js
│       └── CheckoutPage.js
│
├── test-data
│   └── loginData.js
│
├── tests
│   ├── login
│   ├── products
│   ├── cart
│   ├── checkout
│   ├── mobile
│   ├── network
│   ├── api
│   ├── accessibility
│   └── smoke
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Test Coverage

### Login Module

* Valid Login
* Invalid Login
* Locked User Login
* Empty Username Validation
* Empty Password Validation
* Performance Glitch User Login
* Script Injection Validation

### Products Module

* Product Count Validation
* Product Names Validation
* Product Prices Validation
* Product Images Validation
* Add To Cart Button Validation
* Sort Products A-Z
* Sort Products Z-A
* Sort Products Low-High
* Sort Products High-Low
* Product Detail Page Validation
* Product Detail Information Validation
* Back Navigation Validation

### Cart Module

* Add Product To Cart
* Verify Product Appears In Cart
* Add Multiple Products
* Remove Product From Cart
* Verify Cart Badge Updates
* Add Distinct Products
* Cart Subtotal Validation

### Checkout Module

* Successful Checkout
* Empty First Name Validation
* Empty Last Name Validation
* Empty Postal Code Validation
* Order Confirmation Validation
* Checkout With Empty Cart

### Accessibility Testing

* Login Page Accessibility Validation
* Product Image Alt Text Validation

### API Testing

* API Mocking using `route.fulfill()`

### Network Testing

* Network Failure Simulation using `route.abort()`

### Mobile Testing

* Mobile Viewport Login Validation

### Smoke Testing

* Inventory Page Smoke Test
* Cart Page Smoke Test
* Checkout Page Smoke Test

---

## Advanced Playwright Features

### API Mocking

```javascript
await route.fulfill()
```

Used to mock backend responses and validate frontend behavior independently.

### Network Simulation

```javascript
await route.abort()
```

Used to simulate network failures and validate application stability.

### Parallel Execution

```javascript
fullyParallel: true
```

Tests execute simultaneously across workers to reduce execution time.

### Retry Strategy

```javascript
retries: 1
```

Automatically retries failed tests caused by temporary issues.

### Mobile Testing

Tests executed using Playwright mobile viewport configuration.

---

## Reporting & Failure Artifacts

The framework automatically generates:

### HTML Reports

Generate report:

```bash
npx playwright show-report
```

### Screenshots on Failure

```javascript
screenshot: 'only-on-failure'
```

### Videos on Failure

```javascript
video: 'retain-on-failure'
```

### Traces on Failure

```javascript
trace: 'retain-on-failure'
```

Open trace:

```bash
npx playwright show-trace trace.zip
```

---

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run a specific suite:

```bash
npx playwright test tests/login
```

Run a specific test:

```bash
npx playwright test -g "Valid Login"
```

Open report:

```bash
npx playwright show-report
```

---

## CI/CD

GitHub Actions pipeline is configured to:

* Checkout repository
* Install Node.js
* Install project dependencies
* Install Playwright browsers
* Execute Playwright tests
* Publish Playwright reports

Workflow File:

```text
.github/workflows/playwright.yml
```

---

## Key Design Principles

* Page Object Model (POM)
* Data-Driven Testing
* Reusable Methods
* Independent Test Cases
* Failure Artifact Collection
* CI/CD Integration
* Scalable Framework Structure

---

## Author

**Prince Kumar**

Developed as part of the Playwright SauceDemo Automation Capstone Project using Playwright, JavaScript, Page Object Model (POM), Reporting, Failure Artifacts, API Mocking, Network Simulation, Accessibility Testing, and GitHub Actions CI/CD.

GitHub: https://github.com/Princekr007
