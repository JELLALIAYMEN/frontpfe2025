import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnseigantComponent } from './details-enseigant.component';

describe('DetailsEnseigantComponent', () => {
  let component: DetailsEnseigantComponent;
  let fixture: ComponentFixture<DetailsEnseigantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEnseigantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEnseigantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
