import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { EmiInputComponent } from './emi-calculator/emi-input/emi-input.component';
import { EmiChartComponent } from './emi-calculator/emi-chart/emi-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    EmiCalculatorComponent,
    EmiInputComponent,
    EmiChartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
