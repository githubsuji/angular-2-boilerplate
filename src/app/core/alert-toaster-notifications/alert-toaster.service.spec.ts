import { TestBed } from '@angular/core/testing';

import { AlertToasterService } from './alert-toaster.service';

describe('AlertToasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertToasterService = TestBed.get(AlertToasterService);
    expect(service).toBeTruthy();
  });
});
