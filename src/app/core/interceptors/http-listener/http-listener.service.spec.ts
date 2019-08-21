import { TestBed } from '@angular/core/testing';

import { HttpListenerService } from './http-listener.service';

describe('HttpListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpListenerService = TestBed.get(HttpListenerService);
    expect(service).toBeTruthy();
  });
});
