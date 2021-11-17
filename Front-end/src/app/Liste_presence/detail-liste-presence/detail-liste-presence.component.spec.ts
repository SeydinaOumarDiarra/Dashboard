import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListePresenceComponent } from './detail-liste-presence.component';

describe('DetailListePresenceComponent', () => {
  let component: DetailListePresenceComponent;
  let fixture: ComponentFixture<DetailListePresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailListePresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
