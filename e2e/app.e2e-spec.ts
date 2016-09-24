import { RutasAngular2Page } from './app.po';

describe('rutas-angular2 App', function() {
  let page: RutasAngular2Page;

  beforeEach(() => {
    page = new RutasAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
