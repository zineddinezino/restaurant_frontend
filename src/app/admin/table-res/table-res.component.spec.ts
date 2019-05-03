import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResComponent } from './table-res.component';

describe('TableResComponent', () => {
  let component: TableResComponent;
  let fixture: ComponentFixture<TableResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
