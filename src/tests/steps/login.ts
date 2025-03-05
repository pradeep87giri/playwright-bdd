import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { getEmail } from "../../../config";
import { LoginPage } from "../../pageObjects/loginPage";
import { CustomWorld } from "../support/world";

setDefaultTimeout(60 * 1000); 

Given("I navigate to the login page", async function (this: CustomWorld) {
  const page = this.page!;
  this.loginPage = new LoginPage(page);
  await this.loginPage.goToLogin();
});

When("I enter email and password {string}", async function (this: CustomWorld, password: string) {
  const email = getEmail();
  await this.loginPage!.enterCredentials(email, password);
});

When("I click the login button", async function (this: CustomWorld) {
  await this.loginPage!.clickLogin();
});

Then("Verify user is logged in successfully", async function (this: CustomWorld) {
  await this.loginPage?.verifyUserLoggedIn();
});