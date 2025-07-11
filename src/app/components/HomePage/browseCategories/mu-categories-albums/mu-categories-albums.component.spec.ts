import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuCategoriesAlbumsComponent } from './mu-categories-albums.component';

describe('MuCategoriesAlbumsComponent', () => {
  let component: MuCategoriesAlbumsComponent;
  let fixture: ComponentFixture<MuCategoriesAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuCategoriesAlbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuCategoriesAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
