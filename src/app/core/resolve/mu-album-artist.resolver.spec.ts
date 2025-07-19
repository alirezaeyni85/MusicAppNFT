import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { muAlbumArtistResolver } from './mu-album-artist.resolver';

describe('muAlbumArtistResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => muAlbumArtistResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
