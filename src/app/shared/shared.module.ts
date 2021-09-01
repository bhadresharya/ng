import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathcesCategoryPipe } from './pipes/match.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MathcesCategoryPipe
  ],
  exports: [
    MathcesCategoryPipe
  ]
})
export class SharedModule { }
