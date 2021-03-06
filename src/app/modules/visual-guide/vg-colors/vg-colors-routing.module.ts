import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgColorsComponent } from './vg-colors.component';

const routes: Routes = [
  { path: "", component: VgColorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgColorsRoutingModule { }
