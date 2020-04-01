import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.scss"]
})
export class ProgressComponent implements OnInit {
  color = "primary";
  mode = "determinate";
  value = 50;
  bufferValue = 75;
  constructor() {}

  ngOnInit() {}
}
