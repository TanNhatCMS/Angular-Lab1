import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau3Component } from './cau3.component';

describe('Cau3Component', () => {
  let component: Cau3Component;
  let fixture: ComponentFixture<Cau3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Cau3Component]
    });
    fixture = TestBed.createComponent(Cau3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
