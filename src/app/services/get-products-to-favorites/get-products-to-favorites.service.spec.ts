import { TestBed } from '@angular/core/testing';

import { GetProductsToFavoritesService } from './get-products-to-favorites.service';

describe('GetProductsToFavoritesService', () => {
  let service: GetProductsToFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductsToFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
