import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerMotDePassComponent } from './changer-mot-de-pass.component';

describe('ChangerMotDePassComponent', () => {
  let component: ChangerMotDePassComponent;
  let fixture: ComponentFixture<ChangerMotDePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerMotDePassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerMotDePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
