import { TestBed } from '@angular/core/testing';

import { MuInfoArtistsService } from './mu-info-artists.service';

describe('MuInfoArtistsService', () => {
  let service: MuInfoArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuInfoArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
