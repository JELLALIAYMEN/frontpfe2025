import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSuppressionComponent } from './confirmation-suppression.component';

describe('ConfirmationSuppressionComponent', () => {
  let component: ConfirmationSuppressionComponent;
  let fixture: ComponentFixture<ConfirmationSuppressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationSuppressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
