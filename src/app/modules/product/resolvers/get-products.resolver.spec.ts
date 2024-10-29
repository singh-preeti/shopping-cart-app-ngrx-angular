import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getProductsResolver } from './get-products.resolver';

describe('getProductsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getProductsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
