import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuDiscoverAlbumsComponent } from './mu-discover-albums.component';

describe('MuDiscoverAlbumsComponent', () => {
  let component: MuDiscoverAlbumsComponent;
  let fixture: ComponentFixture<MuDiscoverAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuDiscoverAlbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuDiscoverAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
