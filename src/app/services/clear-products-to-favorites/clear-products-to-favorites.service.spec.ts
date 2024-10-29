import { TestBed } from '@angular/core/testing';

import { ClearProductsToFavoritesService } from './clear-products-to-favorites.service';

describe('ClearProductsToFavoritesService', () => {
  let service: ClearProductsToFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClearProductsToFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
