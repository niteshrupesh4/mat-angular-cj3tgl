import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-comment-reactive-form',
  templateUrl: './list-comment-reactive-form.component.html',
  styleUrls: ['./list-comment-reactive-form.component.scss']
})
export class ListCommentReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [
    {
      id: "5e9ea2211039a546fb2f04d5",
      name: "Hamilton Walton",
      comment: "XPLOR"
    },
    {
      id: "5e9ea221dc2ccff2b17f532d",
      name: "Vargas Foreman",
      comment: "UNI"
    },
    {
      id: "5e9ea221650fa88af08e7e20",
      name: "Pace Ochoa",
      comment: "STUCCO"
    },
    {
      id: "5e9ea2215395a43767a4600a",
      name: "Brooke Charles",
      comment: "HYPLEX"
    },
    {
      id: "5e9ea22138481fc6c4167d02",
      name: "Slater Ayers",
      comment: "ISBOL"
    },
    {
      id: "5e9ea221fce6c64e2e738ace",
      name: "Carey Fields",
      comment: "CEDWARD"
    }
  ];

  onClick(data: any) {
    alert(JSON.stringify(data));
  }

}