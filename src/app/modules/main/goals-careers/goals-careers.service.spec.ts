import { TestBed } from '@angular/core/testing';

import { GoalsCareersService } from './goals-careers.service';

describe('GoalsCareersService', () => {
  let service: GoalsCareersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalsCareersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
