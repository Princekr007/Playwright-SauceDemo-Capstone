const { test, expect } = require('@playwright/test');
const loginData =require('../../test-data/loginData');
const LoginPage = require('../../src/pages/LoginPage');

test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
    loginData.validUser,
    loginData.password
);

    await expect(page).toHaveURL(/inventory/);
});

test('Invalid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
    loginData.invalidUser,
    loginData.invalidPassword
);

    await expect(loginPage.errorMsg)
        .toContainText('Username and password do not match');
});

test('Locked User Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.lockedUser,
        loginData.password
    );

    await expect(loginPage.errorMsg)
        .toContainText('Sorry, this user has been locked out');
});

test('Empty Username', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.clickLogin();

    await expect(loginPage.errorMsg)
        .toContainText('Username is required');
});

test('Empty Password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.enterUsername('standard_user');
    await loginPage.clickLogin();

    await expect(loginPage.errorMsg)
        .toContainText('Password is required');
});

test('Performance Glitch User Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'performance_glitch_user',
        'secret_sauce'
    );

    await expect(page)
        .toHaveURL(/inventory/);
});