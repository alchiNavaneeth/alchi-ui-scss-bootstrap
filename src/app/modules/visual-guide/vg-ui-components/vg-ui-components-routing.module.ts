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
import { VgUiListGroupsComponent } from './vg-ui-list-groups/vg-ui-list-groups.component';
import { VgUiModalsComponent } from './vg-ui-modals/vg-ui-modals.component';
import { VgUiNavsComponent } from './vg-ui-navs/vg-ui-navs.component';
import { VgUiPaginationComponent } from './vg-ui-pagination/vg-ui-pagination.component';
import { VgUiPopoverComponent } from './vg-ui-popover/vg-ui-popover.component';
import { VgUiProgressbarComponent } from './vg-ui-progressbar/vg-ui-progressbar.component';
import { VgUiRangeComponent } from './vg-ui-range/vg-ui-range.component';
import { VgUiSpinnersComponent } from './vg-ui-spinners/vg-ui-spinners.component';
import { VgUiTableComponent } from './vg-ui-table/vg-ui-table.component';
import { VgUiToastsComponent } from './vg-ui-toasts/vg-ui-toasts.component';
import { VgUiTogglesComponent } from './vg-ui-toggles/vg-ui-toggles.component';
import { VgUiTooltipComponent } from './vg-ui-tooltip/vg-ui-tooltip.component';

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
      { path: "avatar", component: VgUiAvatarComponent },
      { path: 'list-group', component: VgUiListGroupsComponent },
      { path: 'modals', component: VgUiModalsComponent },
      { path: 'table', component: VgUiTableComponent },
      { path: 'toasts', component: VgUiToastsComponent },
      { path: 'pagination', component: VgUiPaginationComponent },
      { path: 'navs-tabs', component: VgUiNavsComponent },
      { path: 'spinners', component: VgUiSpinnersComponent },
      { path: 'progress-bar', component: VgUiProgressbarComponent },
      { path: 'toggles', component: VgUiTogglesComponent },
      { path: 'popover', component: VgUiPopoverComponent },
      { path: 'tooltip', component: VgUiTooltipComponent },
      { path: 'range', component: VgUiRangeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgUiComponentsRoutingModule { }
