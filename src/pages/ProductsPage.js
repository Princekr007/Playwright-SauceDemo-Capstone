const { expect } = require('@playwright/test');

class ProductsPage {

    constructor(page){

        this.page = page;

        this.productCards = page.locator('.inventory_item');

        this.productNames = page.locator('.inventory_item_name');

        this.productPrices = page.locator('.inventory_item_price');

        this.productImages = page.locator('.inventory_item_img img');

        this.addToCartButtons = page.locator('button[id*="add-to-cart"]');

        this.sortDropdown = page.locator('.product_sort_container');

        this.firstProduct = page.locator('.inventory_item_name').first();
    }

    async getProductCount(){

        return await this.productCards.count();
    }

    async clickFirstAddToCart(){
        await this.addToCartButtons.first().click();
    }

    async getProductName(index){

        return await this.productNames.nth(index).textContent();
    }
    async addProductByIndex(index){

        await this.addToCartButtons.nth(index).click();
    }

    async getProductNameByIndex(index){

        return await this.productNames.nth(index).textContent();
    }

    async selectSortOption(value){

        await this.sortDropdown.selectOption(value);
    }

    async openFirstProduct(){

        await this.firstProduct.click();
    }
}

module.exports = ProductsPage;