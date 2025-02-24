import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoyenneEtNoteComponent } from './home-moyenne-et-note.component';

describe('HomeMoyenneEtNoteComponent', () => {
  let component: HomeMoyenneEtNoteComponent;
  let fixture: ComponentFixture<HomeMoyenneEtNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMoyenneEtNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMoyenneEtNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
