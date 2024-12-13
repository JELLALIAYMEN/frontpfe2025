import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSalleComponent } from './gestion-salle.component';

describe('GestionSalleComponent', () => {
  let component: GestionSalleComponent;
  let fixture: ComponentFixture<GestionSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
