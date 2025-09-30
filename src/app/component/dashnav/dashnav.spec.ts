import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashnav } from './dashnav';

describe('Dashnav', () => {
  let component: Dashnav;
  let fixture: ComponentFixture<Dashnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashnav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
