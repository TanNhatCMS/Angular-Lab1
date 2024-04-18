import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau6Component } from './cau6.component';

describe('Cau6Component', () => {
  let component: Cau6Component;
  let fixture: ComponentFixture<Cau6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Cau6Component]
    });
    fixture = TestBed.createComponent(Cau6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
