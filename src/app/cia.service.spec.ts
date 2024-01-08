import { TestBed } from '@angular/core/testing';

import { CIAService } from './cia.service';

describe('CIAService', () => {
  let service: CIAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CIAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
