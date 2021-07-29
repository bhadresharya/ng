import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeComponent } from './theme.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';


@NgModule({
  declarations: [
    ThemeComponent,
    SidebarComponent,
    HeaderComponent,
    ButtonsComponent,
    TypographyComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
