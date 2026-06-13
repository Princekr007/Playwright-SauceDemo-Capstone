const { test, expect } = require('@playwright/test');

test('Mock API Response', async ({ page }) => {

    await page.route('**/inventory.html', async route => {

        await route.fulfill({

            status: 200,

            body: 'Mocked Response'
        });
    });

    await page.goto(
        'https://www.saucedemo.com/inventory.html'
    );

    const content = await page.textContent('body');

    expect(content).toContain('Mocked Response');
});