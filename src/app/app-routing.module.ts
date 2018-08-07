import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

const routes: Routes = [
  { path: 'calculator', component: EmiCalculatorComponent },
  { path: '', redirectTo: 'calculator', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }