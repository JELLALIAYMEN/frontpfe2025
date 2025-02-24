import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCalendrierExComponent } from './gestion-calendrier-ex.component';

describe('GestionCalendrierExComponent', () => {
  let component: GestionCalendrierExComponent;
  let fixture: ComponentFixture<GestionCalendrierExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCalendrierExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCalendrierExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
