import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgFormControlComponent } from './vg-form-control/vg-form-control.component';
import { VgFormLayoutComponent } from './vg-form-layout/vg-form-layout.component';
import { VgFormValidationComponent } from './vg-form-validation/vg-form-validation.component';
import { VgFormsComponent } from './vg-forms.component';

const routes: Routes = [
  { path: "", component: VgFormsComponent,
    children: [
      { path: "", redirectTo: "controls", pathMatch: "full" },
      { path: "controls", component: VgFormControlComponent },
      { path: "layout", component: VgFormLayoutComponent },
      { path: "validation", component: VgFormValidationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgFormsRoutingModule { }
