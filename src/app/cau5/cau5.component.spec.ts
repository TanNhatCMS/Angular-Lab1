import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau5Component } from './cau5.component';

describe('Cau5Component', () => {
  let component: Cau5Component;
  let fixture: ComponentFixture<Cau5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Cau5Component]
    });
    fixture = TestBed.createComponent(Cau5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
