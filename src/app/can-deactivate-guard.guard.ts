import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TestService } from './test.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  constructor(private testService: TestService) {
    this.testService.onCheck();
  }
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate
      ? component.canDeactivate()
      : !this.testService.touched;
  }
}
