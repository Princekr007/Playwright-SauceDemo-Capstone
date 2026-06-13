class CartPage {

    constructor(page){

        this.page = page;

        this.cartIcon = page.locator('.shopping_cart_link');

        this.cartBadge = page.locator('.shopping_cart_badge');

        this.cartItems = page.locator('.cart_item');

        this.removeButtons = page.locator('button:text("Remove")');
    }

    async openCart(){

        await this.cartIcon.click();
    }

    async getCartBadgeCount(){

        return await this.cartBadge.textContent();
    }

    async getCartItemCount(){

        return await this.cartItems.count();
    }

    async removeFirstProduct(){

        await this.removeButtons.first().click();
    }
}

module.exports = CartPage;