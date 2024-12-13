import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDisciplineComponent } from './ajout-discipline.component';

describe('AjoutDisciplineComponent', () => {
  let component: AjoutDisciplineComponent;
  let fixture: ComponentFixture<AjoutDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
