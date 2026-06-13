const { test, expect } = require('@playwright/test');
const loginData =require('../../test-data/loginData');
const LoginPage = require('../../src/pages/LoginPage');
const ProductsPage = require('../../src/pages/ProductsPage');
const CartPage = require('../../src/pages/CartPage');
const CheckoutPage = require('../../src/pages/CheckoutPage');

test.beforeEach(async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser,
        loginData.password
    );
});

test('Successful Checkout', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.clickFirstAddToCart();

    await cartPage.openCart();

    await checkoutPage.clickCheckout();

    await checkoutPage.completeCheckout(
        'Prince',
        'Kumar',
        '500001'
    );

    await expect(
        checkoutPage.completeHeader
    ).toContainText('Thank you for your order!');
});

test('Empty First Name Validation', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.clickFirstAddToCart();

    await cartPage.openCart();

    await checkoutPage.clickCheckout();

    await checkoutPage.fillCheckoutInfo(
        '',
        'Kumar',
        '500001'
    );

    await checkoutPage.clickContinue();

    await expect(checkoutPage.errorMsg)
        .toContainText('First Name is required');
});

test('Empty Last Name Validation', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.clickFirstAddToCart();

    await cartPage.openCart();

    await checkoutPage.clickCheckout();

    await checkoutPage.fillCheckoutInfo(
        'Prince',
        '',
        '500001'
    );

    await checkoutPage.clickContinue();

    await expect(checkoutPage.errorMsg)
        .toContainText('Last Name is required');
});

test('Empty Postal Code Validation', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.clickFirstAddToCart();

    await cartPage.openCart();

    await checkoutPage.clickCheckout();

    await checkoutPage.fillCheckoutInfo(
        'Prince',
        'Kumar',
        ''
    );

    await checkoutPage.clickContinue();

    await expect(checkoutPage.errorMsg)
        .toContainText('Postal Code is required');
});

test('Verify Order Confirmation Message', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.clickFirstAddToCart();

    await cartPage.openCart();

    await checkoutPage.clickCheckout();

    await checkoutPage.completeCheckout(
        'Prince',
        'Kumar',
        '500001'
    );

    const message =
        await checkoutPage.getConfirmationMessage();

    expect(message)
        .toContain('Thank you for your order!');
});