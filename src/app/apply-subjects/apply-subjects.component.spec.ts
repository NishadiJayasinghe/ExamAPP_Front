import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySubjectsComponent } from './apply-subjects.component';

describe('ApplySubjectsComponent', () => {
  let component: ApplySubjectsComponent;
  let fixture: ComponentFixture<ApplySubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplySubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplySubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
