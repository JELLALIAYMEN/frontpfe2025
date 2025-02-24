import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDeleteEleveComponent } from './confirmation-delete-eleve.component';

describe('ConfirmationDeleteEleveComponent', () => {
  let component: ConfirmationDeleteEleveComponent;
  let fixture: ComponentFixture<ConfirmationDeleteEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDeleteEleveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDeleteEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
