import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teststart } from './teststart';

describe('Teststart', () => {
  let component: Teststart;
  let fixture: ComponentFixture<Teststart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teststart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teststart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
