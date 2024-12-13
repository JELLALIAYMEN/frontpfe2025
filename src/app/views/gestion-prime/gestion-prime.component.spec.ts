import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPrimeComponent } from './gestion-prime.component';

describe('GestionPrimeComponent', () => {
  let component: GestionPrimeComponent;
  let fixture: ComponentFixture<GestionPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPrimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
