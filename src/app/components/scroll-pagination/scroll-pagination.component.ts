import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scroll-pagination",
  templateUrl: "./scroll-pagination.component.html",
  styleUrls: ["./scroll-pagination.component.scss"]
})
export class ScrollPaginationComponent implements OnInit {
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  
  constructor() {
    this.appendItems(0, this.sum);
  }

  ngOnInit() {}

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, " ", "Demo testing "+i]);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "push");
  }

  
  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
    
    this.direction = 'down'
  }
  
  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);
  
    this.direction = 'up';
  }

  

}
