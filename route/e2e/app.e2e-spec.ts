import { RoutePage } from './app.po';

describe('route App', () => {
  let page: RoutePage;

  beforeEach(() => {
    page = new RoutePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
