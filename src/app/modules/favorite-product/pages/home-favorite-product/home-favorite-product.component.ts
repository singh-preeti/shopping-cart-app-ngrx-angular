import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { GridList } from 'src/app/commons/grid-list.class';
import { FavoriteProduct } from 'src/app/models/favorite-product.model';
import { ClearProductsToFavoritesService } from 'src/app/services/clear-products-to-favorites/clear-products-to-favorites.service';
import { GetProductsToFavoritesService } from 'src/app/services/get-products-to-favorites/get-products-to-favorites.service';
import { RemoveProductToFavoritesService } from 'src/app/services/remove-product-to-favorites/remove-product-to-favorites.service';

@Component({
  selector: 'app-home-favorite-product',
  templateUrl: './home-favorite-product.component.html',
  styleUrls: ['./home-favorite-product.component.scss']
})
export class HomeFavoriteProductComponent extends GridList<FavoriteProduct>  implements OnInit {

  override rowHeight: string = '320px';

  constructor(
    private readonly removeProductToFavoritesService:RemoveProductToFavoritesService,
    private readonly getProductToFavoritesService:GetProductsToFavoritesService,
    private readonly clearProductToFavoritesService:ClearProductsToFavoritesService,
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
    this.initFavoritesProducts();
  }

  removeProductFavorites(product:FavoriteProduct){
    this.removeProductToFavoritesService.execute(product);
    this.initFavoritesProducts();
  }

  clearFavoriteList(){
    this.clearProductToFavoritesService.execute()
    this.initFavoritesProducts();
  }

  private initFavoritesProducts(){
    this.data = this.getProductToFavoritesService.execute()
  }

}
