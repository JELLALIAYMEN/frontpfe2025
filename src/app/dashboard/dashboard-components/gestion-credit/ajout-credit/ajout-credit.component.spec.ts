import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCreditComponent } from './ajout-credit.component';

describe('AjoutCreditComponent', () => {
  let component: AjoutCreditComponent;
  let fixture: ComponentFixture<AjoutCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
