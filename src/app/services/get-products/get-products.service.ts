import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import products from '../../../mocks/products'
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor() { }

  execute(): Observable<Array<Product>> {
    return of(products)
  }
}
