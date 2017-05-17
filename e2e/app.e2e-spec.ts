import { OnlineFixPage } from './app.po';

describe('online-fix App', () => {
  let page: OnlineFixPage;

  beforeEach(() => {
    page = new OnlineFixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
