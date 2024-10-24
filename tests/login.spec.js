const { test, expect } = require('@playwright/test');

const LoginPage = require("../pages/homePage/login")
const SignOut = require('../pages/homePage/signOut')


test('Login to Application', async ({ page }) => 
  {
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const loginPage = new LoginPage(page)
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Learn Automation Courses/);
    await loginPage.login()

    const signOut = new SignOut(page)
    await signOut.signOutFromApplication()
  });