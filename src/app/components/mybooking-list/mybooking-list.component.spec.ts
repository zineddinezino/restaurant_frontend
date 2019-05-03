import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybookingListComponent } from './mybooking-list.component';

describe('MybookingListComponent', () => {
  let component: MybookingListComponent;
  let fixture: ComponentFixture<MybookingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybookingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
