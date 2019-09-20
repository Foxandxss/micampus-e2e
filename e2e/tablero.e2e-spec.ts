import { TableroPage } from '../po';
import { userRole } from '../utils/roles';

const sutPage = new TableroPage();

fixture.meta({smoke: 'true'})('Tablero smoke tests')
  .beforeEach(async t => t.useRole(userRole));

test.only('news redirects to main page', async t => {
  sutPage.debugNews();
  const news = sutPage.getNews(0);
  const link = sutPage.getNewsLink(news);

  await t.expect(link.getAttribute('href')).contains('unir.net/vive-unir');
});

fixture('Tablero tests')

test('there is a notification when you dont have courses', async t => {
  await t.expect(sutPage.notification.exists).ok();
});