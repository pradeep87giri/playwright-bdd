import { expect, Page } from "@playwright/test";

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private get txtEmail() { return this.page.locator('#email') }
    private get txtPwd() { return this.page.locator('#pass') }
    private get btnLogin() { return this.page.locator('#maincontent #send2') }

    async goToLogin() {
        await this.page.goto("https://magento.softwaretestingboard.com/customer/account/login/")
    }

    async enterCredentials(username: string, password: string) {
        await this.txtEmail.fill(username);
        await this.txtPwd.fill(password);
    }

    async clickLogin() {
        await this.btnLogin.click();
    }
}