import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';

import { AppComponent } from './app.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { EmiInputComponent } from './emi-calculator/emi-input/emi-input.component';
import { EmiChartComponent } from './emi-calculator/emi-chart/emi-chart.component';
import { EmiFeaturesComponent } from './emi-calculator/emi-features/emi-features.component';

@NgModule({
  declarations: [
    AppComponent,
    EmiCalculatorComponent,
    EmiInputComponent,
    EmiChartComponent,
    EmiFeaturesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TabMenuModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
