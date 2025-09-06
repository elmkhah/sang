import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testresult } from './testresult';

describe('Testresult', () => {
  let component: Testresult;
  let fixture: ComponentFixture<Testresult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testresult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testresult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
