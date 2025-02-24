import { TestBed } from '@angular/core/testing';

import { ParentEleveService } from './parent-eleve.service';

describe('ParentEleveService', () => {
  let service: ParentEleveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentEleveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
