import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantheaderComponent } from './applicantheader.component';

describe('ApplicantheaderComponent', () => {
  let component: ApplicantheaderComponent;
  let fixture: ComponentFixture<ApplicantheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
