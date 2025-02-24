import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsseignerHomewordComponent } from './asseigner-homeword.component';

describe('AsseignerHomewordComponent', () => {
  let component: AsseignerHomewordComponent;
  let fixture: ComponentFixture<AsseignerHomewordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsseignerHomewordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsseignerHomewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
