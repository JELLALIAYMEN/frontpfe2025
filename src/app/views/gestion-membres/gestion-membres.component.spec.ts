import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMembresComponent } from './gestion-membres.component';

describe('GestionMembresComponent', () => {
  let component: GestionMembresComponent;
  let fixture: ComponentFixture<GestionMembresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMembresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
