import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifeSalleComponent } from './modife-salle.component';

describe('ModifeSalleComponent', () => {
  let component: ModifeSalleComponent;
  let fixture: ComponentFixture<ModifeSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifeSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifeSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
