import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  demo: number;
  val = 50;
  min = 0;
  max = 100;
  constructor() { }

  ngOnInit() {
  }

}