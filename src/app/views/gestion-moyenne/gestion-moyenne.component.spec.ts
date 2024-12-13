import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMoyenneComponent } from './gestion-moyenne.component';

describe('GestionMoyenneComponent', () => {
  let component: GestionMoyenneComponent;
  let fixture: ComponentFixture<GestionMoyenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMoyenneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
