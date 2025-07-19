import { TestBed } from '@angular/core/testing';

import { MuMethodsServiceService } from './mu-methods-service.service';

describe('MuMethodsServiceService', () => {
  let service: MuMethodsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuMethodsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
