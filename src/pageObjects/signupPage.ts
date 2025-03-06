import { expect, Locator, Page } from "@playwright/test";
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
    private get lblErrorMsg() { return this.page.locator('div[role="alert"] div.message-error > div') }
    private get lblErrorMsgFirstName() { return this.page.locator('#firstname-error') }
    private get lblErrorMsgLastName() { return this.page.locator('#lastname-error') }
    private get lblErrorMsgEmail() { return this.page.locator('#email_address-error') }
    private get lblErrorMsgPassword() { return this.page.locator('#password-error') }
    private get lblErrorMsgConfirmPwd() { return this.page.locator('#password-confirmation-error') }

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

    async verifyErrorMsg(expectedMsg: string, element: string) {
        let ele: Locator
        try {
            if (element.includes("First")) {
                ele = this.lblErrorMsgFirstName
            } else if (element.includes("Last")) {
                ele = this.lblErrorMsgLastName
            } else if (element.includes("Email")) {
                ele = this.lblErrorMsgEmail
            } else if (element == "Password") {
                ele = this.lblErrorMsgPassword
            } else if (element.includes("Confirm")) {
                ele = this.lblErrorMsgConfirmPwd;
            } else {
                ele = this.lblErrorMsg;
            }
        } catch (e) {
            ele = this.lblErrorMsg;         // Sometimes error shows up on heading instead on fields
        }

        console.log(await ele.textContent({ timeout: 10000 }))
        await expect(ele).toContainText(expectedMsg, { timeout: 10000 });
    }
}