import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferSalleComponent } from './modifer-salle.component';

describe('ModiferSalleComponent', () => {
  let component: ModiferSalleComponent;
  let fixture: ComponentFixture<ModiferSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiferSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiferSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
