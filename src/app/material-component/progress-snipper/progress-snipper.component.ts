import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-snipper',
  templateUrl: './progress-snipper.component.html',
  styleUrls: ['./progress-snipper.component.scss']
})
export class ProgressSnipperComponent implements OnInit {
  color = 'warn';
  mode = 'determinate';
  value = 50;
  constructor() { }

  ngOnInit() {
  }

}