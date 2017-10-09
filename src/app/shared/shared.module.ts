import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as shared from './';

@NgModule({
  imports: [CommonModule],
  declarations: [
    shared.SliderComponent,
    shared.MeterVerticalComponent,
    shared.MeterHorizontalComponent,
  ],
  exports: [
    shared.SliderComponent,
    shared.MeterVerticalComponent,
    shared.MeterHorizontalComponent,
  ],
})
export class SharedModule {}
