import { TestBed } from '@angular/core/testing';

import { ArmarKitService } from './armar-kit.service';

describe('ArmarKitService', () => {
  let service: ArmarKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmarKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
