import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesMenuComponent } from './liste-des-menu.component';

describe('ListeDesMenuComponent', () => {
  let component: ListeDesMenuComponent;
  let fixture: ComponentFixture<ListeDesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
