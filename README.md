# Playwright SauceDemo Capstone

## Project Overview

This project is an End-to-End Automation Framework developed using Playwright with JavaScript for the SauceDemo application.

The framework follows the Page Object Model (POM) design pattern and covers Login, Products, Cart, Checkout, Mobile Testing, Network Simulation, API Mocking, Accessibility Validation, Reporting, and CI/CD integration.

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

Test data is maintained separately in the test-data folder.

---

## Test Coverage

### Login Module

* Valid Login
* Invalid Login
* Locked User Login
* Empty Username Validation
* Empty Password Validation
* Performance Glitch User

### Products Module

* Product Count Validation
* Product Name Validation
* Product Price Validation
* Product Image Validation
* Add To Cart Button Validation
* Product Sorting Validation
* Product Detail Page Validation

### Cart Module

* Add Product To Cart
* Verify Product Appears In Cart
* Add Multiple Products
* Remove Product From Cart
* Verify Cart Badge Updates
* Distinct Product Validation

### Checkout Module

* Successful Checkout
* Empty First Name Validation
* Empty Last Name Validation
* Empty Postal Code Validation
* Order Confirmation Validation

### Additional Scenarios

* Mobile Viewport Testing
* Network Failure Simulation
* API Mocking
* Accessibility Checks

---

## Installation

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

---

## Execute Tests

Run all tests:

npx playwright test

Run specific suite:

npx playwright test tests/login

Generate report:

npx playwright show-report

---

## Reporting

The framework supports:

* HTML Reports
* Screenshots on Failure
* Videos on Failure
* Trace Viewer

---

## CI/CD

GitHub Actions pipeline is configured to:

* Install dependencies
* Install Playwright browsers
* Execute tests
* Publish reports

---

## Project Structure

src/pages

tests/login

tests/products

tests/cart

tests/checkout

tests/mobile

tests/network

tests/api

tests/accessibility

test-data

#Author
- Prince Kumar
