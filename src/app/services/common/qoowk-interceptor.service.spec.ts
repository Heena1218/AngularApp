import { TestBed } from '@angular/core/testing';

import { QoowkInterceptorService } from './qoowk-interceptor.service';

describe('QoowkInterceptorService', () => {
  let service: QoowkInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QoowkInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
