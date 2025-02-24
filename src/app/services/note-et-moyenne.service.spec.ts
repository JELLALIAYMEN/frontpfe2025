import { TestBed } from '@angular/core/testing';

import { NoteEtMoyenneService } from './note-et-moyenne.service';

describe('NoteEtMoyenneService', () => {
  let service: NoteEtMoyenneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteEtMoyenneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
