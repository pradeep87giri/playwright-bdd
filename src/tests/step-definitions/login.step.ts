import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { LoginPage } from "../../pageObjects/loginPage";
import { CustomWorld } from "../support/world";

Given("I navigate to the login page", async function (this: CustomWorld) {
  const page = this.page!;
  this.loginPage = new LoginPage(page);
  await this.loginPage.goToLogin();
});

When("I enter username {string} and password {string}", async function (this: CustomWorld, username: string, password: string) {
  await this.loginPage!.enterCredentials(username, password);
});

When("I click the login button", async function (this: CustomWorld) {
  await this.loginPage!.clickLogin();
});

Then("I should see the dashboard page", async function (this: CustomWorld) {
  await expect(this.page!).toHaveURL(/dashboard/);
});