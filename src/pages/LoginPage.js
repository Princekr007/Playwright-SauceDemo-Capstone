class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameTxt = page.locator('#user-name');
        this.passwordTxt = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
        this.errorMsg = page.locator('[data-test="error"]');
    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username) {
        await this.usernameTxt.fill(username);
    }

    async enterPassword(password) {
        await this.passwordTxt.fill(password);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage() {
        return await this.errorMsg.textContent();
    }
}

module.exports = LoginPage;