import { TestBed } from '@angular/core/testing';

import { BOCARILEService } from './bocarile.service';

describe('BOCARILEService', () => {
  let service: BOCARILEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BOCARILEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
