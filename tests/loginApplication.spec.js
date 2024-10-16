const { test, expect } = require('@playwright/test');

const LoginPage = require("../pages/loginPage")

test('has title', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const loginPage = new LoginPage(page)
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Learn Automation Courses/);

    

    await loginPage.loginToApplication()
  });