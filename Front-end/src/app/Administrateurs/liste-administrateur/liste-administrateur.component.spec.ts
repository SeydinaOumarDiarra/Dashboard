import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdministrateurComponent } from './liste-administrateur.component';

describe('ListeAdministrateurComponent', () => {
  let component: ListeAdministrateurComponent;
  let fixture: ComponentFixture<ListeAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
