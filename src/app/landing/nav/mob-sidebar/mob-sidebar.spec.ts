import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobSidebar } from './mob-sidebar';

describe('MobSidebar', () => {
  let component: MobSidebar;
  let fixture: ComponentFixture<MobSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
