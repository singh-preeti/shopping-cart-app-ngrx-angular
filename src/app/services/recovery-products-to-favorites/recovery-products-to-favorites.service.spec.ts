import { TestBed } from '@angular/core/testing';

import { RecoveryProductsToFavoritesService } from './recovery-products-to-favorites.service';

describe('RecoveryProductsToFavoritesService', () => {
  let service: RecoveryProductsToFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveryProductsToFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
