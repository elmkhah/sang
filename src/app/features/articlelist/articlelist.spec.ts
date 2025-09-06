import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articlelist } from './articlelist';

describe('Articlelist', () => {
  let component: Articlelist;
  let fixture: ComponentFixture<Articlelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articlelist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articlelist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
