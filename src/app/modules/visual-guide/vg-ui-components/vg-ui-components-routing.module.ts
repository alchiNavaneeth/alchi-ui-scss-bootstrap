import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgUiAccordionComponent } from './vg-ui-accordion/vg-ui-accordion.component';
import { VgUiAlertsComponent } from './vg-ui-alerts/vg-ui-alerts.component';
import { VgUiBreadcrumbsComponent } from './vg-ui-breadcrumbs/vg-ui-breadcrumbs.component';
import { VgUiComponentsComponent } from './vg-ui-components.component';

const routes: Routes = [
  { path: "", component: VgUiComponentsComponent,
    children: [
      { path: "", redirectTo: "accordion", pathMatch: "full" },
      { path: "accordion", component: VgUiAccordionComponent },
      { path: "alerts", component: VgUiAlertsComponent },
      { path: "breadcrumb", component: VgUiBreadcrumbsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgUiComponentsRoutingModule { }
