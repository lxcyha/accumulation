import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyhComponent } from './cyh.component';

describe('CyhComponent', () => {
  let component: CyhComponent;
  let fixture: ComponentFixture<CyhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
