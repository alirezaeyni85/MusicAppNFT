import { TestBed } from '@angular/core/testing';

import { MuImagesService } from './mu-images.service';

describe('MuImagesService', () => {
  let service: MuImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
