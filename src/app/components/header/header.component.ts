import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FavoriteProduct } from 'src/app/models/favorite-product.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/states/favorite-product/app.state';
import { selectProducts } from 'src/app/states/favorite-product/selector/app.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title!: string;
  favoritesProducts:Observable<Array<FavoriteProduct>> = this.store.pipe(select(selectProducts))

  constructor(private router: Router,  private store:Store<AppState>) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setTitleFromRoute(this.router.routerState.snapshot.root);
      }
    });
  }

  setTitleFromRoute(route: ActivatedRouteSnapshot) {
    if (route.firstChild) {
      this.setTitleFromRoute(route.firstChild);
    } else {
      this.title = route.data['title'];
    }
  }
  
  redirectToHomeFavoritesProductsPage(){
    this.router.navigate(['/favorites']);
  }

  redirectToHome(){
    this.router.navigate(['/']);
  }
  

}
