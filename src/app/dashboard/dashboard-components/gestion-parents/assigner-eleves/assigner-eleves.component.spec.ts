import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignerElevesComponent } from './assigner-eleves.component';

describe('AssignerElevesComponent', () => {
  let component: AssignerElevesComponent;
  let fixture: ComponentFixture<AssignerElevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignerElevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignerElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
