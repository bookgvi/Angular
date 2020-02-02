import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { UIChart } from 'primeng/chart';


import { ChartsComponent } from '../../components/charts-main/charts.component';
import { ChartBarComponent } from '../../components/chart-bar/chart-bar.component';

@NgModule({
  declarations: [
    ChartsComponent,
    ChartBarComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class ChartsModule {
}
