import { TestBed } from '@angular/core/testing';

import { NavigationInterceptorService } from './navigation-interceptor.service';

describe('NavigationInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationInterceptorService = TestBed.get(NavigationInterceptorService);
    expect(service).toBeTruthy();
  });
});
