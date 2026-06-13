const { test, expect } = require('@playwright/test');
const loginData =require('../../test-data/loginData');
const LoginPage = require('../../src/pages/LoginPage');
const ProductsPage = require('../../src/pages/ProductsPage');
const CartPage = require('../../src/pages/CartPage');

test.beforeEach(async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser,
        loginData.password
    );
});

test('Add Product To Cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.clickFirstAddToCart();

    const badgeCount =
        await cartPage.getCartBadgeCount();

    expect(badgeCount).toBe('1');
});

test('Verify Product Appears In Cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.clickFirstAddToCart();

    await cartPage.openCart();

    const cartCount =
        await cartPage.getCartItemCount();

    expect(cartCount).toBe(1);
});

test('Add Multiple Products', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addProductByIndex(0);

    await productsPage.addProductByIndex(1);

    await productsPage.addProductByIndex(2);

    const badgeCount =
        await cartPage.getCartBadgeCount();

    expect(badgeCount).toBe('3');
});

test('Remove Product From Cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.clickFirstAddToCart();

    await cartPage.openCart();

    await cartPage.removeFirstProduct();

    const cartCount =
        await cartPage.getCartItemCount();

    expect(cartCount).toBe(0);
});

test('Verify Cart Badge Updates', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addProductByIndex(0);
    await productsPage.addProductByIndex(1);

    let badgeCount =
        await cartPage.getCartBadgeCount();

    expect(badgeCount).toBe('2');
});

test('Add Distinct Products', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    const firstProduct =
        await productsPage.getProductNameByIndex(0);

    const secondProduct =
        await productsPage.getProductNameByIndex(1);

    expect(firstProduct)
        .not.toBe(secondProduct);
});

