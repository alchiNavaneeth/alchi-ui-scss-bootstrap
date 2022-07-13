import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { VgUiComponentsRoutingModule } from './vg-ui-components-routing.module';
import { VgUiComponentsComponent } from './vg-ui-components.component';
import { VgUiAccordionComponent } from './vg-ui-accordion/vg-ui-accordion.component';
import { VgUiAlertsComponent } from './vg-ui-alerts/vg-ui-alerts.component';
import { VgUiBreadcrumbsComponent } from './vg-ui-breadcrumbs/vg-ui-breadcrumbs.component';
import { VgUiBadgesComponent } from './vg-ui-badges/vg-ui-badges.component';
import { VgUiButtonsComponent } from './vg-ui-buttons/vg-ui-buttons.component';
import { VgUiButtonGroupsComponent } from './vg-ui-button-groups/vg-ui-button-groups.component';
import { VgUiCardsComponent } from './vg-ui-cards/vg-ui-cards.component';
import { VgUiAvatarComponent } from './vg-ui-avatar/vg-ui-avatar.component';
import { VgUiListGroupsComponent } from './vg-ui-list-groups/vg-ui-list-groups.component';
import { VgUiModalsComponent } from './vg-ui-modals/vg-ui-modals.component';
import { VgUiTableComponent } from './vg-ui-table/vg-ui-table.component';
import { VgUiPaginationComponent } from './vg-ui-pagination/vg-ui-pagination.component';
import { VgUiToastsComponent } from './vg-ui-toasts/vg-ui-toasts.component';
import { VgUiNavsComponent } from './vg-ui-navs/vg-ui-navs.component';
import { VgUiSpinnersComponent } from './vg-ui-spinners/vg-ui-spinners.component';
import { VgUiProgressbarComponent } from './vg-ui-progressbar/vg-ui-progressbar.component';
import { VgUiTogglesComponent } from './vg-ui-toggles/vg-ui-toggles.component';
import { VgUiPopoverComponent } from './vg-ui-popover/vg-ui-popover.component';


@NgModule({
  declarations: [
    VgUiComponentsComponent,
    VgUiAccordionComponent,
    VgUiAlertsComponent,
    VgUiBreadcrumbsComponent,
    VgUiBadgesComponent,
    VgUiButtonsComponent,
    VgUiButtonGroupsComponent,
    VgUiCardsComponent,
    VgUiAvatarComponent,
    VgUiListGroupsComponent,
    VgUiModalsComponent,
    VgUiTableComponent,
    VgUiPaginationComponent,
    VgUiToastsComponent,
    VgUiNavsComponent,
    VgUiSpinnersComponent,
    VgUiProgressbarComponent,
    VgUiTogglesComponent,
    VgUiPopoverComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VgUiComponentsRoutingModule
  ]
})
export class VgUiComponentsModule { }
