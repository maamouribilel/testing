import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  name = new FormControl('');
  constructor(public testService: TestService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
