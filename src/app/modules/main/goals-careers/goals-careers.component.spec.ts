import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsCareersComponent } from './goals-careers.component';

describe('GoalsCareersComponent', () => {
  let component: GoalsCareersComponent;
  let fixture: ComponentFixture<GoalsCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsCareersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
