import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCalendrierComponent } from './ajout-calendrier.component';

describe('AjoutCalendrierComponent', () => {
  let component: AjoutCalendrierComponent;
  let fixture: ComponentFixture<AjoutCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCalendrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
