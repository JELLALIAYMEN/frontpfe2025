import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalendrierExComponent } from './list-calendrier-ex.component';

describe('ListCalendrierExComponent', () => {
  let component: ListCalendrierExComponent;
  let fixture: ComponentFixture<ListCalendrierExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCalendrierExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCalendrierExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
