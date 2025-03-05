import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { CustomWorld } from "./world";

let browser: Browser;

Before(async function (this: CustomWorld) {
  browser = await chromium.launch({ headless: false });
  this.page = await browser.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await browser.close();
});