import { TestBed } from '@angular/core/testing';

import { JwtTokenServiceService } from './jwt-token-service.service';

describe('JwtTokenServiceService', () => {
  let service: JwtTokenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtTokenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
