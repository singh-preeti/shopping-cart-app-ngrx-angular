import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFavoriteProductComponent } from './home-favorite-product.component';

describe('HomeFavoriteProductComponent', () => {
  let component: HomeFavoriteProductComponent;
  let fixture: ComponentFixture<HomeFavoriteProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFavoriteProductComponent]
    });
    fixture = TestBed.createComponent(HomeFavoriteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
