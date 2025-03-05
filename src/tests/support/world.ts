import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { LoginPage } from "../../pageObjects/loginPage";
import { SignupPage } from "../../pageObjects/signupPage";

export class CustomWorld extends World {
  page?: Page;
  loginPage?: LoginPage;
  signupPage?: SignupPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);