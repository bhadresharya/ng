import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeComponent } from './theme.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';


@NgModule({
  declarations: [
    ThemeComponent,
    ButtonsComponent,
    TypographyComponent,
    ChartsComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
