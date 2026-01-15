import { test } from "@playwright/test";
import { EmailUtils } from "./utils/EmailUtils";
import * as signUpPage from "./pages/SignUp";
import * as loginPage from "./pages/Login";
import { join, resolve } from "path";
import { writeFileSync, existsSync, mkdirSync } from "fs";

// test("Generate inbox", async () => {
//   const inbox = await createInbox();
//   console.log(inbox);
// });
const testSignUp = process.env.SIGN_UP_FLOW;
test("Sign up", async ({ page }) => {
  test.skip(testSignUp !== "true", "Skipping the test");
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
  await loginPage.verifySuccesfulLogin(page);

  //persist the login data
  const loginData = {
    email: inbox.emailAddress,
    pass: signUpPage.signUpData.pass,
  };
  const authDir = resolve(__dirname, "../playwright/.auth ");
  if (!existsSync(authDir)) {
    mkdirSync(authDir, { recursive: true });
  }

  writeFileSync(
    join(authDir, "loginData.json"),
    JSON.stringify(loginData, null, 2)
  );
});
