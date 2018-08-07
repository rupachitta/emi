import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { EmiInputComponent } from './emi-calculator/emi-input/emi-input.component';
import { EmiChartComponent } from './emi-calculator/emi-chart/emi-chart.component';
import { EmiFeaturesComponent } from './emi-calculator/emi-features/emi-features.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EmiCalculatorComponent,
    EmiInputComponent,
    EmiChartComponent,
    EmiFeaturesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
