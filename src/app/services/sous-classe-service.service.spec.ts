import { TestBed } from '@angular/core/testing';

import { SousClasseServiceService } from './sous-classe-service.service';

describe('SousClasseServiceService', () => {
  let service: SousClasseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousClasseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
