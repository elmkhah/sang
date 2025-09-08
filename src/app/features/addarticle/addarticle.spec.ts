import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addarticle } from './addarticle';

describe('Addarticle', () => {
  let component: Addarticle;
  let fixture: ComponentFixture<Addarticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addarticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addarticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
