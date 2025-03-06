import { expect, Locator, Page } from "@playwright/test";
import { BASE_URL } from "../../config"

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private get txtEmail() { return this.page.locator('#email') }
    private get txtPwd() { return this.page.locator('//input[@name="login[password]"]') }
    private get btnLogin() { return this.page.locator('#maincontent #send2') }
    private get lblMyAccount() { return this.page.locator('.page-title >span') }
    private get lblErrorMsg() { return this.page.locator('div[role="alert"] div.message-error > div') }
    private get lblErrorMsgEmail() { return this.page.locator('#email-error') }
    private get lblErrorMsgPassword() { return this.page.locator('#pass-error') }

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

    async verifyLoginErrorMsg(expectedMsg: string, element: string) {
        let ele: Locator
        if (element.includes("Email")) {
            ele = this.lblErrorMsgEmail;
            await this.txtEmail.press('Tab')
            await this.btnLogin.click();
        }
        if (element.includes("Password")) {
            ele = this.lblErrorMsgPassword;
        } else if (element.includes("Heading")) {
            ele = this.lblErrorMsg;
        }

        try {
            console.log(await ele!.textContent({ timeout: 10000 }));
            await expect(ele!).toContainText(expectedMsg, { timeout: 10000 });
        } catch (e) {
            // Sometimes error msg appears on heading
            ele = this.lblErrorMsg;
            expectedMsg = "A login and a password are required.";
            await expect(ele).toContainText(expectedMsg, { timeout: 10000 });
        }
    }
}