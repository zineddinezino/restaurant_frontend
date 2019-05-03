import { TestBed } from '@angular/core/testing';

import { SendingService } from './sending.service';

describe('SendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendingService = TestBed.get(SendingService);
    expect(service).toBeTruthy();
  });
});
