import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module'

import { VgFormsRoutingModule } from './vg-forms-routing.module';
import { VgFormsComponent } from './vg-forms.component';
import { VgFormControlComponent } from './vg-form-control/vg-form-control.component';
import { VgFormValidationComponent } from './vg-form-validation/vg-form-validation.component';
import { VgFormLayoutComponent } from './vg-form-layout/vg-form-layout.component';


@NgModule({
  declarations: [
    VgFormsComponent,
    VgFormControlComponent,
    VgFormValidationComponent,
    VgFormLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VgFormsRoutingModule
  ]
})
export class VgFormsModule { }
