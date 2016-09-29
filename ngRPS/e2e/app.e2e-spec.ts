import { NgRPSPage } from './app.po';

describe('ng-rps App', function() {
  let page: NgRPSPage;

  beforeEach(() => {
    page = new NgRPSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
