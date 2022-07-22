import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { VgWireframyElementsRoutingModule } from './vg-wireframy-elements-routing.module';
import { VgWireframyElementsComponent } from './vg-wireframy-elements.component';
import { VgWireSteppersComponent } from './vg-wire-steppers/vg-wire-steppers.component';
import { VgWireIcongroupsComponent } from './vg-wire-icongroups/vg-wire-icongroups.component';
import { VgWireNotificationComponent } from './vg-wire-notification/vg-wire-notification.component';
import { VgWireChatComponent } from './vg-wire-chat/vg-wire-chat.component';
import { VgWiNavigationBarsComponent } from './vg-wi-navigation-bars/vg-wi-navigation-bars.component';
import { VgWireSideNavigationBarsComponent } from './vg-wire-side-navigation-bars/vg-wire-side-navigation-bars.component';
import { VgWirePlaceholdersComponent } from './vg-wire-placeholders/vg-wire-placeholders.component';


@NgModule({
  declarations: [
    VgWireframyElementsComponent,
    VgWireSteppersComponent,
    VgWireIcongroupsComponent,
    VgWireNotificationComponent,
    VgWireChatComponent,
    VgWiNavigationBarsComponent,
    VgWireSideNavigationBarsComponent,
    VgWirePlaceholdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VgWireframyElementsRoutingModule
  ]
})
export class VgWireframyElementsModule { }
