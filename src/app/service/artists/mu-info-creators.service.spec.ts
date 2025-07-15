import { TestBed } from '@angular/core/testing';

import { MuInfoCreatorsService } from './mu-info-creators.service';

describe('MuInfoCreatorsService', () => {
  let service: MuInfoCreatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuInfoCreatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
