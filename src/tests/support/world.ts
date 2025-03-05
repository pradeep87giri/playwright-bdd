import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { LoginPage } from "../../pageObjects/loginPage";

export class CustomWorld extends World {
  page?: Page;
  loginPage?: LoginPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);