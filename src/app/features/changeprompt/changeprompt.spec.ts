import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Changeprompt } from './changeprompt';

describe('Changeprompt', () => {
  let component: Changeprompt;
  let fixture: ComponentFixture<Changeprompt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Changeprompt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Changeprompt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
