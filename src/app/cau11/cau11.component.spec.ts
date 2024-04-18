import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau11Component } from './cau11.component';

describe('Cau11Component', () => {
  let component: Cau11Component;
  let fixture: ComponentFixture<Cau11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Cau11Component]
    });
    fixture = TestBed.createComponent(Cau11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
