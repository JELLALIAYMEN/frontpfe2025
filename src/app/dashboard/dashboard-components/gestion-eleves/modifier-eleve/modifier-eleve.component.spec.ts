import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEleveComponent } from './modifier-eleve.component';

describe('ModifierEleveComponent', () => {
  let component: ModifierEleveComponent;
  let fixture: ComponentFixture<ModifierEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEleveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
