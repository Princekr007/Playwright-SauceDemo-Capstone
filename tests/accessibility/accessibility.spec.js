const { test, expect } = require('@playwright/test');

test('Verify Login Labels Exist', async ({ page }) => {

    await page.goto(
        'https://www.saucedemo.com/'
    );

    const username =
        page.locator('#user-name');

    const password =
        page.locator('#password');

    await expect(username).toBeVisible();

    await expect(password).toBeVisible();
});