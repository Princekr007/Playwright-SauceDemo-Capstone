const { test, expect } = require('@playwright/test');
const loginData =require('../../test-data/loginData');
const LoginPage = require('../../src/pages/LoginPage');
const ProductsPage = require('../../src/pages/ProductsPage');

test.beforeEach(async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser,
        loginData.password
    );
});

test('Verify Product Count', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    const count = await productsPage.getProductCount();

    console.log('Product Count =', count);

    expect(count).toBeGreaterThan(0);
});

test('Verify Product Names', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    const count = await productsPage.productNames.count();

    expect(count).toBeGreaterThan(0);
});

test('Verify Product Prices', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    const totalPrices = await productsPage.productPrices.count();

    for(let i=0; i<totalPrices; i++){

        const priceText =
            await productsPage.productPrices.nth(i).textContent();

        console.log(priceText);

        expect(priceText).not.toBe('');
    }
});

test('Verify Product Images', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    const imageCount =
        await productsPage.productImages.count();

    expect(imageCount).toBeGreaterThan(0);

    console.log('Images Found:', imageCount);
});

test('Verify Add To Cart Buttons', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    const buttonCount =
        await productsPage.addToCartButtons.count();

    expect(buttonCount).toBeGreaterThan(0);

    console.log('Buttons Found:', buttonCount);
});

test('Sort Products A to Z', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.selectSortOption('az');


    const names =
        await productsPage.productNames.allTextContents();

    console.log(names);

    expect(names[0]).toBe('Sauce Labs Backpack');
});

test('Verify Product Sorting Z to A', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.selectSortOption('za');

    const actualNames =
        await productsPage.productNames.allTextContents();

    const expectedNames =
        [...actualNames].sort().reverse();

    expect(actualNames)
        .toEqual(expectedNames);
});

test('Verify Price Sorting Low to High', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.selectSortOption('lohi');

    const prices =
        await productsPage.productPrices.allTextContents();

    const actualPrices = prices.map(
        price => parseFloat(price.replace('$', ''))
    );

    const expectedPrices =
        [...actualPrices].sort((a, b) => a - b);

    expect(actualPrices)
        .toEqual(expectedPrices);
});

test('Verify Price Sorting High to Low', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.selectSortOption('hilo');

    const prices =
        await productsPage.productPrices.allTextContents();

    const actualPrices = prices.map(
        price => parseFloat(price.replace('$', ''))
    );

    const expectedPrices =
        [...actualPrices].sort((a, b) => b - a);

    expect(actualPrices)
        .toEqual(expectedPrices);
});

test('Verify Product Detail Page', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.openFirstProduct();

    await expect(page)
        .toHaveURL(/inventory-item/);
});

test('Verify Product Detail Information', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.openFirstProduct();

    await expect(
        page.locator('.inventory_details_name')
    ).toBeVisible();

    await expect(
        page.locator('.inventory_details_price')
    ).toBeVisible();

    await expect(
        page.locator('[data-test="add-to-cart"]')
    ).toContainText('Add to cart');
});

test('Verify Back Navigation', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.openFirstProduct();

    await page.click('#back-to-products');

    await expect(page)
        .toHaveURL(/inventory/);
});
