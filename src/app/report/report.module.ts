import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
