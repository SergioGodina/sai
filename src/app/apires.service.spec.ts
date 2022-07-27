import { TestBed } from '@angular/core/testing';

import { ApiresService } from './apires.service';

describe('ApiresService', () => {
  let service: ApiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
