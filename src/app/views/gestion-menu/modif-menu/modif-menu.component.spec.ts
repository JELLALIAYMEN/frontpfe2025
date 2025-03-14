import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMenuComponent } from './modif-menu.component';

describe('ModifMenuComponent', () => {
  let component: ModifMenuComponent;
  let fixture: ComponentFixture<ModifMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
