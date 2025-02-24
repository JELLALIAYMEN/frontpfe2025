import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferMenuComponent } from './modifer-menu.component';

describe('ModiferMenuComponent', () => {
  let component: ModiferMenuComponent;
  let fixture: ComponentFixture<ModiferMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiferMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiferMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
