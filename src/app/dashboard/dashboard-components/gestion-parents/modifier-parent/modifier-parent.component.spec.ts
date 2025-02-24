import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParentComponent } from './modifier-parent.component';

describe('ModifierParentComponent', () => {
  let component: ModifierParentComponent;
  let fixture: ComponentFixture<ModifierParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
