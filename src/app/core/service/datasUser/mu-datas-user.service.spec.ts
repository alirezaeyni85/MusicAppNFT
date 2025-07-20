import { TestBed } from '@angular/core/testing';

import { MuDatasUserService } from './mu-datas-user.service';

describe('MuDatasUserService', () => {
  let service: MuDatasUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuDatasUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
