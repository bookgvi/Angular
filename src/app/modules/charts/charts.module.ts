import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { UIChart } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';

import { ChartsComponent } from '../../components/charts/charts-main/charts.component';
import { ChartBarComponent } from '../../components/charts/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from '../../components/charts/chart-doughnut/chart-doughnut.component';
import { ChartLineComponent } from '../../components/charts/chart-line/chart-line.component';
import { ChartPolarAreaComponent } from '../../components/charts/chart-polar-area/chart-polar-area.component';
import { ChartPieComponent } from '../../components/charts/chart-pie/chart-pie.component';
import { ChartRadarComponent } from '../../components/charts/chart-radar/chart-radar.component';


@NgModule({
  declarations: [
    ChartsComponent,
    ChartBarComponent,
    ChartDoughnutComponent,
    ChartLineComponent,
    ChartPolarAreaComponent,
    ChartPieComponent,
    ChartRadarComponent
  ],
  providers: [
    MessageService
  ],
  imports: [
    CommonModule,
    ChartModule,
    ToastModule
  ]
})
export class ChartsModule {
}
