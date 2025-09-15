import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobMenu } from './mob-menu';

describe('MobMenu', () => {
  let component: MobMenu;
  let fixture: ComponentFixture<MobMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
