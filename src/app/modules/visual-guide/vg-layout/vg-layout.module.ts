import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module'

import { VgLayoutRoutingModule } from './vg-layout-routing.module';
import { VgLayoutComponent } from './vg-layout.component';
import { VgLayoutGridComponent } from './vg-layout-grid/vg-layout-grid.component';


@NgModule({
  declarations: [
    VgLayoutComponent,
    VgLayoutGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VgLayoutRoutingModule
  ]
})
export class VgLayoutModule { }
