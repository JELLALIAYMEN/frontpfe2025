import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPasswordComponent } from './nouveau-password.component';

describe('NouveauPasswordComponent', () => {
  let component: NouveauPasswordComponent;
  let fixture: ComponentFixture<NouveauPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
