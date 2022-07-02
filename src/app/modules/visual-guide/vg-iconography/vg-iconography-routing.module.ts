import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgIconographyComponent } from './vg-iconography.component';

const routes: Routes = [
  { path: "", component: VgIconographyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgIconographyRoutingModule { }
