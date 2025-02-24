import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillsDisciplineComponent } from './detaills-discipline.component';

describe('DetaillsDisciplineComponent', () => {
  let component: DetaillsDisciplineComponent;
  let fixture: ComponentFixture<DetaillsDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillsDisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillsDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
