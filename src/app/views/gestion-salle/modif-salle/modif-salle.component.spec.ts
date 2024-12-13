import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSalleComponent } from './modif-salle.component';

describe('ModifSalleComponent', () => {
  let component: ModifSalleComponent;
  let fixture: ComponentFixture<ModifSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
