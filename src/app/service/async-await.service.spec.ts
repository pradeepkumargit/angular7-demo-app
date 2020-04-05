import { TestBed } from '@angular/core/testing';

import { AsyncAwaitService } from './async-await.service';

describe('AsyncAwaitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncAwaitService = TestBed.get(AsyncAwaitService);
    expect(service).toBeTruthy();
  });
});
