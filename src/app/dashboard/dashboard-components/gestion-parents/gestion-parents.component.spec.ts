import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionParentsComponent } from './gestion-parents.component';

describe('GestionParentsComponent', () => {
  let component: GestionParentsComponent;
  let fixture: ComponentFixture<GestionParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionParentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
