const { test, expect } = require('@playwright/test');

test('Network Failure Simulation', async ({ page }) => {

    await page.route('**/*', route => {

        route.abort();
    });

    await page.goto(
        'https://www.saucedemo.com/',
        { waitUntil: 'domcontentloaded' }
    ).catch(() => {});

    expect(page.url()).not.toContain('inventory');
});