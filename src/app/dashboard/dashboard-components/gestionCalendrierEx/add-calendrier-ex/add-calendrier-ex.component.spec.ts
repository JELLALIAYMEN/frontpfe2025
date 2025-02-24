import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalendrierExComponent } from './add-calendrier-ex.component';

describe('AddCalendrierExComponent', () => {
  let component: AddCalendrierExComponent;
  let fixture: ComponentFixture<AddCalendrierExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCalendrierExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalendrierExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
