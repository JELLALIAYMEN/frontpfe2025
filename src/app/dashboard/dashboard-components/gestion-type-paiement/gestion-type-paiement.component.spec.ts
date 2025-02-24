import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTypePaiementComponent } from './gestion-type-paiement.component';

describe('GestionTypePaiementComponent', () => {
  let component: GestionTypePaiementComponent;
  let fixture: ComponentFixture<GestionTypePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTypePaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTypePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
