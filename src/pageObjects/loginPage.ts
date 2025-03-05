import { expect, Locator, Page } from "@playwright/test";


export class LoginPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    // Locators
    private get txtEmail() { return this.page.locator('#emailControl') }
    private get txtPwd() { return this.page.locator('#passwordControl') }
}