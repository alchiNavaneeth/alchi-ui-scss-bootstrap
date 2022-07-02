import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgLayoutComponent } from './vg-layout.component';

import { VgLayoutGridComponent } from './vg-layout-grid/vg-layout-grid.component';

const routes: Routes = [
  { path: "", component: VgLayoutComponent,
  children: [
    { path: "", redirectTo: "grid", pathMatch: "full" },
    { path: "grid", component: VgLayoutGridComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgLayoutRoutingModule { }
