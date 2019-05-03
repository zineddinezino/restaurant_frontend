import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningTimeComponent } from './opening-time.component';

describe('OpeningTimeComponent', () => {
  let component: OpeningTimeComponent;
  let fixture: ComponentFixture<OpeningTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
