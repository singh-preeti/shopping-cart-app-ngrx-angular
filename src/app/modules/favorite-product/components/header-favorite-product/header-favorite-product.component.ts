import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-favorite-product',
  templateUrl: './header-favorite-product.component.html',
  styleUrls: ['./header-favorite-product.component.scss']
})
export class HeaderFavoriteProductComponent {

  @Output()
  clickClearEvent:EventEmitter<any> = new EventEmitter<any>();


  clearEvent() {
    this.clickClearEvent.emit()
  }
}
