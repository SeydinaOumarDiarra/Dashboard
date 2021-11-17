import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePresenceMonthComponent } from './liste-presence-month.component';

describe('ListePresenceMonthComponent', () => {
  let component: ListePresenceMonthComponent;
  let fixture: ComponentFixture<ListePresenceMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePresenceMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePresenceMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
