import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module'

import { VgIconographyRoutingModule } from './vg-iconography-routing.module';
import { VgIconographyComponent } from './vg-iconography.component';


@NgModule({
  declarations: [
    VgIconographyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VgIconographyRoutingModule
  ]
})
export class VgIconographyModule { }
