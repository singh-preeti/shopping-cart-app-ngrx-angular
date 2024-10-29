import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFavoriteProductComponent } from './header-favorite-product.component';

describe('HeaderFavoriteProductComponent', () => {
  let component: HeaderFavoriteProductComponent;
  let fixture: ComponentFixture<HeaderFavoriteProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderFavoriteProductComponent]
    });
    fixture = TestBed.createComponent(HeaderFavoriteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
