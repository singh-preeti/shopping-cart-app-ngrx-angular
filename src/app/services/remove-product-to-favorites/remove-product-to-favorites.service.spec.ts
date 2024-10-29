import { TestBed } from '@angular/core/testing';

import { RemoveProductToFavoritesService } from './remove-product-to-favorites.service';

describe('RemoveProductToFavoritesService', () => {
  let service: RemoveProductToFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveProductToFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
