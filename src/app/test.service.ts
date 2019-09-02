import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  touched = false;

  constructor(private router: Router) {}

  onTouch() {
    this.touched = true;
    console.log(this.touched);
  }
  onSave() {
    this.touched = false;
    console.log(this.touched);
  }
  onCheck() {
    if (this.touched === true) {
      if (confirm('discard changes')) {
        this.touched = false;
      } else {
        this.touched = true;
      }
    } else {
      this.touched = false;
      console.log('you can leave!');
    }
  }
}
