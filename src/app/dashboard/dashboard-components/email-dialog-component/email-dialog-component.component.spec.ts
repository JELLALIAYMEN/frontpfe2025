import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDialogComponentComponent } from './email-dialog-component.component';

describe('EmailDialogComponentComponent', () => {
  let component: EmailDialogComponentComponent;
  let fixture: ComponentFixture<EmailDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
