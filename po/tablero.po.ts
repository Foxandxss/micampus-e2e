import { Selector } from 'testcafe';

interface CustomHtmlSelector extends Selector {
  outerHTML: Promise<any>;
}

export class TableroPage {
  header = Selector('.ic-Dashboard-header__title span');
  notification = Selector('#dashboard .ic-notification');

  private news = <CustomHtmlSelector>Selector('#unir-alumni .rss-item').addCustomDOMProperties({
    outerHTML: el => el.outerHTML
  });

  getNews(index: number) {
    return this.news.nth(index);
  }

  getNewsLink(news: Selector) {
    return news.find('a');
  }

  async debugNews() {
    console.log(await this.news.outerHTML);
  }
}