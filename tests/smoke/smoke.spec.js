const { test, expect } = require('@playwright/test');

const LoginPage = require('../../src/pages/LoginPage');
const ProductsPage = require('../../src/pages/ProductsPage');
const CartPage = require('../../src/pages/CartPage');
const CheckoutPage = require('../../src/pages/CheckoutPage');
const loginData = require('../../test-data/loginData');

test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser,
        loginData.password
    );
});

test('Inventory Page Smoke Test', async ({ page }) => {

    await expect(
        page.locator('.inventory_list')
    ).toBeVisible();
});

test('Cart Page Smoke Test', async ({ page }) => {

    const cartPage = new CartPage(page);

    await cartPage.openCart();

    await expect(
        page.locator('.cart_list')
    ).toBeVisible();
});

test('Checkout Page Smoke Test', async ({ page }) => {

    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await cartPage.openCart();

    await checkoutPage.clickCheckout();

    await expect(
        page.locator('#first-name')
    ).toBeVisible();

    await expect(
        page.locator('#last-name')
    ).toBeVisible();

    await expect(
        page.locator('#postal-code')
    ).toBeVisible();
});