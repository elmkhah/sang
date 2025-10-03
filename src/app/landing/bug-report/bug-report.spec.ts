import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugReport } from './bug-report';

describe('BugReport', () => {
  let component: BugReport;
  let fixture: ComponentFixture<BugReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BugReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
