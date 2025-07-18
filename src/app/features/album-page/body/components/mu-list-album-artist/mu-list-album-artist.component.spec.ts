import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuListAlbumArtistComponent } from './mu-list-album-artist.component';

describe('MuListAlbumArtistComponent', () => {
  let component: MuListAlbumArtistComponent;
  let fixture: ComponentFixture<MuListAlbumArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuListAlbumArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuListAlbumArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
