module.exports = {
  default: {
    paths: [
      "src/tests/features/signup.feature",
      "src/tests/features/login.feature"
    ],
    dryRun: false,
    require: [
      "src/tests/steps/*.ts",
      "src/tests/support/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["progress-bar", "summary", "json:reports/cucumber_report.json", "html:reports/cucumber-report.html"],
    formatOptions: {
      colorsEnabled: true,
      snippetInterface: "async-await"
    }
  }
};