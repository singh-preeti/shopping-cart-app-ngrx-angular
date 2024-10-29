import { TestBed } from '@angular/core/testing';

import { AddProductToFavoritesService } from './add-product-to-favorites.service';

describe('AddProductToFavoritesService', () => {
  let service: AddProductToFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProductToFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
