import { Selector } from 'testcafe';

export class NavPage {
  cuentaButton = Selector('#global_nav_profile_link');
  cursosButton = Selector('#global_nav_courses_link');
  calendarioButton = Selector('#global_nav_calendar_link');
  bibliotecaButton = Selector('#library-link');
}

export class NavTrayPage {
  header = Selector('#nav-tray-portal h2');
}