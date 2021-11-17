import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePresenceDayComponent } from './liste-presence-day.component';

describe('ListePresenceDayComponent', () => {
  let component: ListePresenceDayComponent;
  let fixture: ComponentFixture<ListePresenceDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePresenceDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePresenceDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
