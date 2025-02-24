import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerEmploiComponent } from './envoyer-emploi.component';

describe('EnvoyerEmploiComponent', () => {
  let component: EnvoyerEmploiComponent;
  let fixture: ComponentFixture<EnvoyerEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvoyerEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
