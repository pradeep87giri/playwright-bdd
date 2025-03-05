import { expect, Page } from "@playwright/test";
import { BASE_URL } from "../../config"

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private get txtEmail() { return this.page.locator('#email') }
    private get txtPwd() { return this.page.locator('#pass') }
    private get btnLogin() { return this.page.locator('#maincontent #send2') }
    private get lblMyAccount() { return this.page.locator('.page-title >span') }

    async goToLogin() {
        await this.page.goto(`${BASE_URL}/customer/account/login/`, { waitUntil: "load" })
    }

    async enterCredentials(email: string, password: string) {
        await this.txtEmail.fill(email);
        await this.txtPwd.fill(password);
    }

    async clickLogin() {
        await this.btnLogin.click();
    }

    async verifyUserLoggedIn() {
        console.log(await this.lblMyAccount.textContent())
        await expect(this.lblMyAccount, "User Login Error").toHaveText('My Account');
    }
}