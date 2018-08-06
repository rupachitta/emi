import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-emi-input',
  templateUrl: './emi-input.component.html',
  styleUrls: ['./emi-input.component.css']
})
export class EmiInputComponent implements OnInit {
  @Output() change = new EventEmitter();
  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({});
    this.formGroup.addControl('amount', new FormControl(1500000));
    this.formGroup.addControl('emi', new FormControl(14772));
    this.formGroup.addControl('months', new FormControl(180));
    this.formGroup.addControl('interest', new FormControl(8.5));
  }

  calculate() {
    this.change.emit(this.formGroup.value);
  }
}
