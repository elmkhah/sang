import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfount404 } from './notfount404';

describe('Notfount404', () => {
  let component: Notfount404;
  let fixture: ComponentFixture<Notfount404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfount404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notfount404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
