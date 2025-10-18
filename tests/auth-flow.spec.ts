import { test } from "@playwright/test";
import { EmailUtils } from "./utils/EmailUtils";
import * as signUpPage from "./pages/SignUp";
import * as loginPage from "./pages/Login";

// test("Generate inbox", async () => {
//   const inbox = await createInbox();
//   console.log(inbox);
// });

test("Sign up", async ({ page }) => {
  const emailUtils = new EmailUtils();
  const inbox = await emailUtils.createInbox();
  console.log(inbox);

  await page.goto("https://valentinos-magic-beans.click/signup");

  await signUpPage.signUp(page, inbox.emailAddress);

  const email = await emailUtils.waitForLAtestEmail(inbox.id);
  console.log(email);

  //get the code from the email body
  const code = /([0-9]{6})$/.exec(email?.body!)![1];

  await signUpPage.addConfirmationCode(page, code);

  //login
  await loginPage.login(page, inbox.emailAddress, signUpPage.signUpData.pass);
});
