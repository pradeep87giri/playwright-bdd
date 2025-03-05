import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { getEmail } from "../../../config";
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

When("I enter email", async function (this: CustomWorld) {
  const email = getEmail();
  await this.signupPage!.enterEmail(email);
});

When("I enter password {string} and confirm password", async function (this: CustomWorld, password: string) {
  await this.signupPage!.enterPassword(password);
});

When("I click the Create an Account button", async function (this: CustomWorld) {
  await this.signupPage!.clickSignup();
});

Then("I should see a success message {string}", async function (this: CustomWorld, expectedMessage: string) {
  await this.signupPage!.verifyMessage(expectedMessage);
});