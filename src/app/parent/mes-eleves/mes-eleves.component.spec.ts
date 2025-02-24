import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesElevesComponent } from './mes-eleves.component';

describe('MesElevesComponent', () => {
  let component: MesElevesComponent;
  let fixture: ComponentFixture<MesElevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesElevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
