import { GetingredientsPage } from './app.po';

describe('getingredients App', function() {
  let page: GetingredientsPage;

  beforeEach(() => {
    page = new GetingredientsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
