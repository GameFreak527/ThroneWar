import { TestBed } from '@angular/core/testing';

import { DisucssionService } from './disucssion.service';

describe('DisucssionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisucssionService = TestBed.get(DisucssionService);
    expect(service).toBeTruthy();
  });
});
