import { Selector } from 'testcafe';

export class LoginPage {
  loginInput = Selector('#pseudonym_session_unique_id');
  passwordInput = Selector('#pseudonym_session_password');
  loginButton = Selector('button[type="submit"]');
}