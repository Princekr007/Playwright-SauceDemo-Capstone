class CheckoutPage {

    constructor(page){

        this.page = page;

        this.checkoutBtn = page.locator('#checkout');

        this.firstNameTxt = page.locator('#first-name');

        this.lastNameTxt = page.locator('#last-name');

        this.postalCodeTxt = page.locator('#postal-code');

        this.continueBtn = page.locator('#continue');

        this.finishBtn = page.locator('#finish');

        this.errorMsg = page.locator('[data-test="error"]');

        this.completeHeader =
            page.locator('.complete-header');
    }

    async clickCheckout(){

        await this.checkoutBtn.click();
    }

    async fillCheckoutInfo(firstName, lastName, postalCode){

        await this.firstNameTxt.fill(firstName);

        await this.lastNameTxt.fill(lastName);

        await this.postalCodeTxt.fill(postalCode);
    }

    async clickContinue(){

        await this.continueBtn.click();
    }

    async clickFinish(){

        await this.finishBtn.click();
    }

    async completeCheckout(firstName, lastName, postalCode){

        await this.fillCheckoutInfo(
            firstName,
            lastName,
            postalCode
        );

        await this.clickContinue();

        await this.clickFinish();
    }

    async getConfirmationMessage(){

      return await this.completeHeader.textContent();
    }
}

module.exports = CheckoutPage;