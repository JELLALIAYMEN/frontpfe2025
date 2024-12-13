import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMoyenneComponent } from './ajout-moyenne.component';

describe('AjoutMoyenneComponent', () => {
  let component: AjoutMoyenneComponent;
  let fixture: ComponentFixture<AjoutMoyenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMoyenneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
