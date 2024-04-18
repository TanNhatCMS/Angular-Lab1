import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau2Component } from './cau2.component';

describe('Cau2Component', () => {
  let component: Cau2Component;
  let fixture: ComponentFixture<Cau2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Cau2Component]
    });
    fixture = TestBed.createComponent(Cau2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
