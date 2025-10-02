import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personcard } from './personcard';

describe('Personcard', () => {
  let component: Personcard;
  let fixture: ComponentFixture<Personcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
