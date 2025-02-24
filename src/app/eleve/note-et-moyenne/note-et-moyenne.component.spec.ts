import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEtMoyenneComponent } from './note-et-moyenne.component';

describe('NoteEtMoyenneComponent', () => {
  let component: NoteEtMoyenneComponent;
  let fixture: ComponentFixture<NoteEtMoyenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEtMoyenneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteEtMoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
