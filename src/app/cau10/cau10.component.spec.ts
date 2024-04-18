import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau10Component } from './cau10.component';

describe('Cau10Component', () => {
  let component: Cau10Component;
  let fixture: ComponentFixture<Cau10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Cau10Component]
    });
    fixture = TestBed.createComponent(Cau10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
