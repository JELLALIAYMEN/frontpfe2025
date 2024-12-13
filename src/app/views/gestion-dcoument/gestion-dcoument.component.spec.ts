import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDcoumentComponent } from './gestion-dcoument.component';

describe('GestionDcoumentComponent', () => {
  let component: GestionDcoumentComponent;
  let fixture: ComponentFixture<GestionDcoumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDcoumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDcoumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
