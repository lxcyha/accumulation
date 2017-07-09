import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyh2Component } from './cyh2.component';

describe('Cyh2Component', () => {
  let component: Cyh2Component;
  let fixture: ComponentFixture<Cyh2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cyh2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cyh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
