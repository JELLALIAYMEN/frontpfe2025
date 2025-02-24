import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerAElevesComponent } from './envoyer-aeleves.component';

describe('EnvoyerAElevesComponent', () => {
  let component: EnvoyerAElevesComponent;
  let fixture: ComponentFixture<EnvoyerAElevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerAElevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvoyerAElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
