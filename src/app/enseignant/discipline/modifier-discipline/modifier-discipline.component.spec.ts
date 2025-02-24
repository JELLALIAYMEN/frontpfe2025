import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDisciplineComponent } from './modifier-discipline.component';

describe('ModifierDisciplineComponent', () => {
  let component: ModifierDisciplineComponent;
  let fixture: ComponentFixture<ModifierDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
