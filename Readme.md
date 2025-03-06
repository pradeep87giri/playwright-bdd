# Incubyte Assignment

This project is to test signup and login functionalities of Magneto website using Playwright and Cucumber.

## Getting Started

- ### Prerequisites
    - Node.js
    - npm

 ## Installing Playwright
 
```
 npm init playwright@latest
```
**During installation, select the appropriate options:**
- Choose between TypeScript or JavaScript (default is TypeScript)
- Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
- Add a GitHub Actions workflow to easily run tests on CI
- Install Playwright browsers (default is true)
- Alternatively, you can install browser with command `npx playwright install --with-deps chromium`


## Installing dependencies

 ```
 npm install
 ```
 
## Running the tests in headed mode

 ```
 npm run cucumber
 ```

 ## Report
Reports will be available in the _reports_ folder

**Note:** The test execution flow ensures that a signup is performed first using a random email, and the same email is used for login in the next feature file.
