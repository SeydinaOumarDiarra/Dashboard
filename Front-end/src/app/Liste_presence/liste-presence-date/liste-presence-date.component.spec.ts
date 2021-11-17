import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePresenceDateComponent } from './liste-presence-date.component';

describe('ListePresenceDateComponent', () => {
  let component: ListePresenceDateComponent;
  let fixture: ComponentFixture<ListePresenceDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePresenceDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePresenceDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
