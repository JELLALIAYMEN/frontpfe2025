import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenneEtNoteComponent } from './moyenne-et-note.component';

describe('MoyenneEtNoteComponent', () => {
  let component: MoyenneEtNoteComponent;
  let fixture: ComponentFixture<MoyenneEtNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyenneEtNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoyenneEtNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
