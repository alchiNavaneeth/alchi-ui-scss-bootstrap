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
    VgUiAvatarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VgUiComponentsRoutingModule
  ]
})
export class VgUiComponentsModule { }
