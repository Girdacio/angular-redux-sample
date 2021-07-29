import { TestBed } from '@angular/core/testing';

import { ContadorStoreService } from './contador-store.service';

describe('ContadorStoreService', () => {
  let service: ContadorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
