import { Directive, ElementRef, Input } from '@angular/core';
import { init, ECharts } from 'echarts';
@Directive({
  selector: '[appEcharts]'
})
export class EchartsDirective {

  private chart: ECharts;

  constructor(private element: ElementRef) {
    this.chart = init(this.element.nativeElement);
  }

  @Input('options')
  public set options(options: any) {
    if (options) {
      this.chart.setOption(options);
      this.chart.resize();
    }
  }

}
