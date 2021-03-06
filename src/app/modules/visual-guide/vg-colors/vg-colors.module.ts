import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module'

import { VgColorsRoutingModule } from './vg-colors-routing.module';
import { VgColorsComponent } from './vg-colors.component';


@NgModule({
  declarations: [
    VgColorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VgColorsRoutingModule
  ]
})
export class VgColorsModule { }
