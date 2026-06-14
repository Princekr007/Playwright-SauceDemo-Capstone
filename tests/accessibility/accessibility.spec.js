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

test('Verify Images Have Alt Text', async ({ page }) => {

    const images =
        page.locator('.inventory_item_img img');

    const count =
        await images.count();

    for(let i = 0; i < count; i++){

        const altText =
            await images.nth(i)
            .getAttribute('alt');

        expect(altText)
            .not.toBeNull();

        console.log(
            `Image ${i + 1}: ${altText}`
        );
    }
});