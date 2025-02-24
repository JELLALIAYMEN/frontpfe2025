import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTypePaiementComponent } from './ajout-type-paiement.component';

describe('AjoutTypePaiementComponent', () => {
  let component: AjoutTypePaiementComponent;
  let fixture: ComponentFixture<AjoutTypePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTypePaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutTypePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
