import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuAlbumMainPageComponent } from './mu-album-main-page.component';

describe('MuAlbumMainPageComponent', () => {
  let component: MuAlbumMainPageComponent;
  let fixture: ComponentFixture<MuAlbumMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuAlbumMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuAlbumMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
