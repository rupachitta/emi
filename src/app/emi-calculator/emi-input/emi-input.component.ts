import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-emi-input',
  templateUrl: './emi-input.component.html',
  styleUrls: ['./emi-input.component.css']
})
export class EmiInputComponent implements OnInit {
  formGroup: FormGroup;


  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({});
    this.formGroup.addControl('amount', new FormControl());
    this.formGroup.addControl('emi', new FormControl());
    this.formGroup.addControl('months', new FormControl());
    this.formGroup.addControl('interest', new FormControl());
  }

  calculate() {
    console.log(this.formGroup);
  }
}
