import { TestBed } from '@angular/core/testing';

import { BrainboxaiService } from './brainboxai.service';

describe('BrainboxaiService', () => {
  let service: BrainboxaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrainboxaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
