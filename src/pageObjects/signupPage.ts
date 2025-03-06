import { expect, Page } from "@playwright/test";
import { BASE_URL } from "../../config";

export class SignupPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private get txtFirstName() { return this.page.locator('#firstname') }
    private get txtLastName() { return this.page.locator('#lastname') }
    private get txtEmailAddress() { return this.page.locator('#email_address') }
    private get txtPassword() { return this.page.locator('#password') }
    private get txtConfirmPassword() { return this.page.locator('#password-confirmation') }
    private get btnCreateAccount() { return this.page.locator('button[title="Create an Account"]') }
    private get lblMsg() { return this.page.locator('div[role="alert"] div.message-success > div') }

    async gotoSignup() {
        await this.page.goto(`${BASE_URL}/customer/account/create/`, { waitUntil: "load" });
    }

    async enterPersonalInformation(firstName: string, lastName: string) {
        await this.txtFirstName.fill(firstName);
        await this.txtLastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.txtEmailAddress.fill(email);
    }

    async enterPassword(password: string, confirmPwd: string) {
        await this.txtPassword.fill(password);
        await this.txtConfirmPassword.fill(confirmPwd);
    }

    async clickSignup() {
        await this.btnCreateAccount.click();
    }

    async verifyMessage(expectedMessage: string) {
        const msg = await this.lblMsg.textContent();
        expect(msg).toBe(expectedMessage)
    }
}