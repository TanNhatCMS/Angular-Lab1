import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau8Component } from './cau8.component';

describe('Cau8Component', () => {
  let component: Cau8Component;
  let fixture: ComponentFixture<Cau8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Cau8Component]
    });
    fixture = TestBed.createComponent(Cau8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
