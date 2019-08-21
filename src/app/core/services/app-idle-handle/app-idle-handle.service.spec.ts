import { TestBed } from '@angular/core/testing';

import { AppIdleHandleService } from './app-idle-handle.service';

describe('AppIdleHandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppIdleHandleService = TestBed.get(AppIdleHandleService);
    expect(service).toBeTruthy();
  });
});
