import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgColorsBrandComponent } from './vg-colors-brand/vg-colors-brand.component';
import { VgColorsStateComponent } from './vg-colors-state/vg-colors-state.component';
import { VgColorsUtilityComponent } from './vg-colors-utility/vg-colors-utility.component';
import { VgColorsComponent } from './vg-colors.component';

const routes: Routes = [
  { path: "", component: VgColorsComponent,
    children: [
      { path: "", redirectTo: "brand", pathMatch: "full" },
      { path:"brand", component: VgColorsBrandComponent },
      { path:"state", component: VgColorsStateComponent },
      { path:"utility", component: VgColorsUtilityComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgColorsRoutingModule { }
