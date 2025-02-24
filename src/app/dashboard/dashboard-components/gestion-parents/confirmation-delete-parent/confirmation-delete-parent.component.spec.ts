import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDeleteParentComponent } from './confirmation-delete-parent.component';

describe('ConfirmationDeleteParentComponent', () => {
  let component: ConfirmationDeleteParentComponent;
  let fixture: ComponentFixture<ConfirmationDeleteParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDeleteParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDeleteParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
