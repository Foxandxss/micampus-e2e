import { Role } from 'testcafe';
import { LoginPage } from '../po';

const loginPage = new LoginPage();

export const userRole = Role('https://micampus.unir.net', async t => {
  await t
    .typeText(loginPage.loginInput, '')
    .typeText(loginPage.passwordInput, '')
    .click(loginPage.loginButton);
}, { preserveUrl: true });