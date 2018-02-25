import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmServiciosComponent } from './abm-servicios.component';

describe('AbmServiciosComponent', () => {
  let component: AbmServiciosComponent;
  let fixture: ComponentFixture<AbmServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
