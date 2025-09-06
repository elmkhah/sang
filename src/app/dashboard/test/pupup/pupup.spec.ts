import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pupup } from './pupup';

describe('Pupup', () => {
  let component: Pupup;
  let fixture: ComponentFixture<Pupup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pupup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pupup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
