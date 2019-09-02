import { TestBed, async, inject } from '@angular/core/testing';

import { CanLeaveGuard } from './can-leave.guard';

describe('CanLeaveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanLeaveGuard]
    });
  });

  it('should ...', inject([CanLeaveGuard], (guard: CanLeaveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
