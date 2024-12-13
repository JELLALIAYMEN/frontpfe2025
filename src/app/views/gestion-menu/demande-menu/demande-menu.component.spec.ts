import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMenuComponent } from './demande-menu.component';

describe('DemandeMenuComponent', () => {
  let component: DemandeMenuComponent;
  let fixture: ComponentFixture<DemandeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
