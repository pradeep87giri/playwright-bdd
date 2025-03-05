import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { LoginPage } from "../../pageObjects/LoginPage";

Given("I navigate to the login page", async function () {
  const page = this.page!;
  this.loginPage = new LoginPage(page);
  await this.loginPage.goto();
});

When("I enter username {string} and password {string}", async function ( username: string, password: string) {
  await this.loginPage!.enterCredentials(username, password);
});

When("I click the login button", async function () {
  await this.loginPage!.clickLogin();
});

Then("I should see the dashboard page", async function () {
  await expect(this.page!).toHaveURL(/dashboard/);
});