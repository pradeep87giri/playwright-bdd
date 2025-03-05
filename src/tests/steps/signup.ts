import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { SignupPage } from "../../pageObjects/signupPage";
import { CustomWorld } from "../support/world";

setDefaultTimeout(60 * 1000);

Given("I navigate to the signup page", async function (this: CustomWorld) {
  const page = this.page!
  this.signupPage = new SignupPage(page);
  await this.signupPage.gotoSignup();
});

When("I enter first name {string} and last name {string}", async function (this: CustomWorld, firstName: string, lastName: string) {
  await this.signupPage!.enterPersonalInformation(firstName, lastName);
});

When("I enter email {string}", async function (this: CustomWorld, email: string) {
  await this.signupPage!.enterEmail(email);
});

When("I enter password {string} and confirm password {string}", async function (this: CustomWorld, password: string, confirmPassword: string) {
  await this.signupPage!.enterPassword(password, confirmPassword);
});

When("I click the {string} button", async function (this: CustomWorld, buttonText: string) {
  await this.signupPage!.clickSignup();
});

Then("I should see a success message {string}", async function (this: CustomWorld, expectedMessage: string) {
  const message = await this.signupPage!.getSuccessMessage();
  expect(message).toContain(expectedMessage);
});