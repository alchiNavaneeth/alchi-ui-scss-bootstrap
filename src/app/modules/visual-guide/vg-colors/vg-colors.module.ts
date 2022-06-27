import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VgColorsRoutingModule } from './vg-colors-routing.module';
import { VgColorsComponent } from './vg-colors.component';
import { VgColorsBrandComponent } from './vg-colors-brand/vg-colors-brand.component';
import { VgColorsStateComponent } from './vg-colors-state/vg-colors-state.component';
import { VgColorsUtilityComponent } from './vg-colors-utility/vg-colors-utility.component';


@NgModule({
  declarations: [
    VgColorsComponent,
    VgColorsBrandComponent,
    VgColorsStateComponent,
    VgColorsUtilityComponent
  ],
  imports: [
    CommonModule,
    VgColorsRoutingModule
  ]
})
export class VgColorsModule { }
