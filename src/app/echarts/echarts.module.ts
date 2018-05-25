import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsDirective } from './echarts.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ EchartsDirective ],
  exports: [
    EchartsDirective
  ]
})
export class EchartsModule { }
