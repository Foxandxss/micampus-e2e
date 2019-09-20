import { TableroPage, NavPage, NavTrayPage, CalendarioPage } from '../po';
import { userRole } from '../utils/roles';
import { pageUrl } from '../utils/utils';

const calendarioPage = new CalendarioPage();
const tableroPage = new TableroPage();
const navPage = new NavPage();
const navTrayPage = new NavTrayPage();

fixture.meta({smoke: 'true'})('Sidebar navigation')
  .beforeEach(async t => await t.useRole(userRole));

test('navigates to the tablero page', async t => {
  await t
    .expect(tableroPage.header.textContent).eql('Tablero');
});

test('opens the nav for cuenta', async t => {
  await t
    .click(navPage.cuentaButton)
    .expect(navTrayPage.header.textContent).contains('DANIEL');
});

test('opens the nav for cursos', async t => {
  await t
    .click(navPage.cursosButton)
    .expect(navTrayPage.header.textContent).eql('Cursos');
});

test('navigates to calendar page', async t => {
  await t
    .click(navPage.calendarioButton)
    .expect(pageUrl()).contains(calendarioPage.url);
});

test('links to the biblioteca page', async t => {
  await t
    .expect(navPage.bibliotecaButton.getAttribute('href')).contains('biblioteca.unir.net')
    .expect(navPage.bibliotecaButton.getAttribute('target')).eql('_blank');
});