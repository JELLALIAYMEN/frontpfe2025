import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClassComponent } from './details-class.component';

describe('DetailsClassComponent', () => {
  let component: DetailsClassComponent;
  let fixture: ComponentFixture<DetailsClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
