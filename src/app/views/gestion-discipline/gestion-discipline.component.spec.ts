import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDisciplineComponent } from './gestion-discipline.component';

describe('GestionDisciplineComponent', () => {
  let component: GestionDisciplineComponent;
  let fixture: ComponentFixture<GestionDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
