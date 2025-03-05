import { Page } from "@playwright/test";

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

    async gotoSignup() {
        await this.page.goto("https://magento.softwaretestingboard.com/customer/account/create/", { waitUntil: "load" });
    }

    async enterPersonalInformation(firstName: string, lastName: string) {
        await this.txtFirstName.fill(firstName);
        await this.txtLastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.txtEmailAddress.fill(email);
    }

    async enterPassword(password: string, confirmPassword: string) {
        await this.txtPassword.fill(password);
        await this.txtConfirmPassword.fill(password);
    }

    async clickSignup() {
        // await this.btnCreateAccount.click();
    }

    async getSuccessMessage(): Promise<string> {
        // const msg = await this.page.textContent(".success-message");
        // return msg ?? '';
        return '';
    }
}