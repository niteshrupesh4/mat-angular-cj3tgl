import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"]
})
export class ListsComponent implements OnInit {
  typesOfShoes = ["Boots", "Clogs", "Loafers", "Moccasins", "Sneakers"];
  messages: any[] = [
    {
      from: "Nirav joshi (nbj@gmail.com)",
      image: "https://cdn.jsdelivr.net/gh/niteshrupesh4/demo-angular-test@master/src/assets/images/users/1.jpg",
      subject: "Material angular",
      content: "This is the material angular template"
    },
    {
      from: "Sunil joshi (sbj@gmail.com)",
      image: "https://cdn.jsdelivr.net/gh/niteshrupesh4/demo-angular-test@master/src/assets/images/users/2.jpg",
      subject: "Wrappixel",
      content: "We have wrappixel launched"
    },
    {
      from: "Vishal Bhatt (bht@gmail.com)",
      image: "https://cdn.jsdelivr.net/gh/niteshrupesh4/demo-angular-test@master/src/assets/images/users/3.jpg",
      subject: "Task list",
      content: "This is the latest task hasbeen done"
    }
  ];

  folders = [
    {
      name: "Photos",
      updated: new Date("1/1/16")
    },
    {
      name: "Recipes",
      updated: new Date("1/17/16")
    },
    {
      name: "Work",
      updated: new Date("1/28/16")
    }
  ];
  notes = [
    {
      name: "Vacation Itinerary",
      updated: new Date("2/20/16")
    },
    {
      name: "Kitchen Remodel",
      updated: new Date("1/18/16")
    }
  ];
  constructor() {}

  ngOnInit() {}
}
