import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmploiComponent } from './list-emploi.component';

describe('ListEmploiComponent', () => {
  let component: ListEmploiComponent;
  let fixture: ComponentFixture<ListEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
