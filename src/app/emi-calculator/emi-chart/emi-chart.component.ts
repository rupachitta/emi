import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-emi-chart',
  templateUrl: './emi-chart.component.html',
  styleUrls: ['./emi-chart.component.css']
})
export class EmiChartComponent implements OnInit, OnChanges {
  @Input() loanObj;

  chartArray = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.loanObj) {
      this.drawChart();
    }
  }

  drawChart() {
    let { amount } = this.loanObj;
    while (amount > 0) {
      const obj: any = {};
      obj.interest = Math.round(amount * this.loanObj.interest / 1200);
      obj.principal = this.loanObj.emi - obj.interest;
      obj.balance = amount = amount  - obj.principal;
      this.chartArray.push(obj);
    }
  }

}
