const { test, expect } =
require('@playwright/test');

test.use({

    viewport: {
        width: 390,
        height: 844
    }
});

test('Mobile Login Test', async ({ page }) => {

    await page.goto(
        'https://www.saucedemo.com/'
    );

    await page.fill(
        '#user-name',
        'standard_user'
    );

    await page.fill(
        '#password',
        'secret_sauce'
    );

    await page.click(
        '#login-button'
    );

    await expect(page)
        .toHaveURL(/inventory/);
});