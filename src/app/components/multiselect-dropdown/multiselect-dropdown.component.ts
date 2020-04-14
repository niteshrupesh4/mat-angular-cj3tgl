import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.scss']
})
export class MultiselectDropdownComponent implements OnInit {
    itemList = [];
    selectedItems = [];
    settings = {};

    userForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    createForm() {
        this.userForm = this.fb.group({
            name: '',
            email: ['', Validators.required],
            skills: [[], Validators.required]
        });
    }
    submitForm() {
        console.log(this.userForm.value);
    }
    ngOnInit() {

        this.itemList = [
            { "id": 1, "itemName": "Angular" },
            { "id": 2, "itemName": "JavaScript" },
            { "id": 3, "itemName": "HTML" },
            { "id": 4, "itemName": "CSS" },
            { "id": 5, "itemName": "ReactJS" },
            { "id": 6, "itemName": "HTML5" }
        ];
        this.selectedItems = [];
        this.settings = {
            text: "Select Skills",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
    }
    onItemSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }
}