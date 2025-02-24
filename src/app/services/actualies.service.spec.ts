import { TestBed } from '@angular/core/testing';

import { ActualiesService } from './actualies.service';

describe('ActualiesService', () => {
  let service: ActualiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
