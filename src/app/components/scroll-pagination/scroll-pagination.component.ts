import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { Observable } from "rxjs";
import { STATES, FIXED_SIZE } from "./states";

@Component({
  selector: "app-scroll-pagination",
  templateUrl: "./scroll-pagination.component.html",
  styleUrls: ["./scroll-pagination.component.scss"]
})
export class ScrollPaginationComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  fixedSizeData = FIXED_SIZE;

  states$ = Observable.create(observer => {
    observer.next(STATES);
    observer.complete();
  });

  sortBy(prop: "name" | "capital") {
    const sortedVals = STATES.map(s => ({ ...s })).sort((a, b) => {
      const aProp = a[prop],
        bProp = b[prop];
      if (aProp < bProp) {
        return -1;
      } else if (aProp > bProp) {
        return 1;
      }
      return 0;
    });

    this.states$ = Observable.create(observer => {
      observer.next(sortedVals);
      observer.complete();
    });
  }
}
