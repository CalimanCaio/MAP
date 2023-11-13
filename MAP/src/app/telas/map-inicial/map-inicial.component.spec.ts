import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInicialComponent } from './map-inicial.component';

describe('MapInicialComponent', () => {
  let component: MapInicialComponent;
  let fixture: ComponentFixture<MapInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapInicialComponent]
    });
    fixture = TestBed.createComponent(MapInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
