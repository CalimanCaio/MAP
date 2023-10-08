import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoMapComponent } from './criacao-map.component';

describe('CriacaoMapComponent', () => {
  let component: CriacaoMapComponent;
  let fixture: ComponentFixture<CriacaoMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriacaoMapComponent]
    });
    fixture = TestBed.createComponent(CriacaoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
