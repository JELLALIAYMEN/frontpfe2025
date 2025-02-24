import { TestBed } from '@angular/core/testing';

import { CalendrierExService } from './calendrier-ex.service';

describe('CalendrierExService', () => {
  let service: CalendrierExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendrierExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
