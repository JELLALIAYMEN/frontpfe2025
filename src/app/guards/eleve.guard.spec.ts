import { TestBed } from '@angular/core/testing';

import { EleveGuard } from './eleve.guard';

describe('EleveGuard', () => {
  let guard: EleveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EleveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
