import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmploiTempsComponent } from './gestion-emploi-temps.component';

describe('GestionEmploiTempsComponent', () => {
  let component: GestionEmploiTempsComponent;
  let fixture: ComponentFixture<GestionEmploiTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEmploiTempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEmploiTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
