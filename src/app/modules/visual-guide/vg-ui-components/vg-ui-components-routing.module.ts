import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgUiAccordionComponent } from './vg-ui-accordion/vg-ui-accordion.component';
import { VgUiAlertsComponent } from './vg-ui-alerts/vg-ui-alerts.component';
import { VgUiAvatarComponent } from './vg-ui-avatar/vg-ui-avatar.component';
import { VgUiBadgesComponent } from './vg-ui-badges/vg-ui-badges.component';
import { VgUiBreadcrumbsComponent } from './vg-ui-breadcrumbs/vg-ui-breadcrumbs.component';
import { VgUiButtonGroupsComponent } from './vg-ui-button-groups/vg-ui-button-groups.component';
import { VgUiButtonsComponent } from './vg-ui-buttons/vg-ui-buttons.component';
import { VgUiCardsComponent } from './vg-ui-cards/vg-ui-cards.component';
import { VgUiComponentsComponent } from './vg-ui-components.component';

const routes: Routes = [
  { path: "", component: VgUiComponentsComponent,
    children: [
      { path: "", redirectTo: "accordion", pathMatch: "full" },
      { path: "accordion", component: VgUiAccordionComponent },
      { path: "alerts", component: VgUiAlertsComponent },
      { path: "breadcrumb", component: VgUiBreadcrumbsComponent },
      { path: "buttons", component: VgUiButtonsComponent },
      { path: "badges", component: VgUiBadgesComponent },
      { path: "button-group", component: VgUiButtonGroupsComponent },
      { path: "cards", component: VgUiCardsComponent },
      { path: "avatar", component: VgUiAvatarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgUiComponentsRoutingModule { }
