import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { GridList } from 'src/app/commons/grid-list.class';
import { FavoriteProduct } from 'src/app/models/favorite-product.model';
import { Product } from 'src/app/models/product.model';
import { selectProducts } from 'src/app/states/favorite-product/selector/app.selector';
import { AppState } from 'src/app/states/favorite-product/app.state';
import { Observable, map } from 'rxjs';
import { AddProductToFavoritesService } from 'src/app/services/add-product-to-favorites/add-product-to-favorites.service';
import { RemoveProductToFavoritesService } from 'src/app/services/remove-product-to-favorites/remove-product-to-favorites.service';
import { RecoveryProductsToFavoritesService } from 'src/app/services/recovery-products-to-favorites/recovery-products-to-favorites.service';


@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss']
})
export class HomeProductComponent extends GridList<Product>  implements OnInit {
  override rowHeight: string = '320px';
  favoriteProductsObs:Observable<Array<FavoriteProduct>> = this.store.pipe(select(selectProducts));

  
  constructor(private readonly activatedRoute: ActivatedRoute, 
    private readonly store:Store<AppState>,
    private readonly addProductToFavoritesService:AddProductToFavoritesService,
    private readonly removeProductToFavoritesService:RemoveProductToFavoritesService,
    private readonly recoveryProductToFavoritesService:RecoveryProductsToFavoritesService,
    breakpointObserver:BreakpointObserver, 
  )
  {
    super(breakpointObserver);
  }
  
  @HostListener("window:resize", ["$event"])
  onResize(__:any){
    this.colsDesktop = this.getNumberOfColumns();
  }

  ngOnInit(){
    this.initResolvers();
    this.updateStorageToStateFavoriteProducts();
  }

  addProductToFavorites(product:Product){
    const favoriteProduct:FavoriteProduct = {
      ...product,
      isFavorite: true
    }
    this.addProductToFavoritesService.execute(favoriteProduct);
  }

  removeProductToFavorites(product:Product){
    const favoriteProduct:FavoriteProduct = {
      ...product,
      isFavorite: false
    }
    this.removeProductToFavoritesService.execute(favoriteProduct);
  }

  private initResolvers(){
    this.activatedRoute.data.subscribe(({products}) => {
      this.initStateFavoriteProduct(products);
    })
  }

  private updateStorageToStateFavoriteProducts(){
    this.recoveryProductToFavoritesService.execute();
  }

  private initStateFavoriteProduct(products:Product[]){
    this.favoriteProductsObs.pipe(
      map((favoriteProducts) => this.mapProducts(products, favoriteProducts))
    )
    .subscribe((favotireProducts) => {
        this.data = favotireProducts;
    })
  }

  private mapProducts(products:Product[], favotireProducts:FavoriteProduct[]):FavoriteProduct[] {
    return products.map((product) => {
      const favoriteFound = favotireProducts.find((f) => f.id === product.id);
      return favoriteFound?{...product, isFavorite:true}:{...product, isFavorite:false}
    })
  }

}
