import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgWiNavigationBarsComponent } from './vg-wi-navigation-bars/vg-wi-navigation-bars.component';
import { VgWireChatComponent } from './vg-wire-chat/vg-wire-chat.component';
import { VgWireIcongroupsComponent } from './vg-wire-icongroups/vg-wire-icongroups.component';
import { VgWireNotificationComponent } from './vg-wire-notification/vg-wire-notification.component';
import { VgWirePlaceholdersComponent } from './vg-wire-placeholders/vg-wire-placeholders.component';
import { VgWireSideNavigationBarsComponent } from './vg-wire-side-navigation-bars/vg-wire-side-navigation-bars.component';
import { VgWireSteppersComponent } from './vg-wire-steppers/vg-wire-steppers.component';
import { VgWireframyElementsComponent } from './vg-wireframy-elements.component';

const routes: Routes = [
  { path: "", component: VgWireframyElementsComponent,
    children: [
      { path: "steppers", component: VgWireSteppersComponent },
      { path: "icon-groups", component: VgWireIcongroupsComponent },
      { path: "notification", component: VgWireNotificationComponent },
      { path: "chat-bubble", component: VgWireChatComponent },
      { path: "navigation-bars", component: VgWiNavigationBarsComponent },
      { path: "side-navigation-bars", component: VgWireSideNavigationBarsComponent },
      { path: "placeholders", component: VgWirePlaceholdersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgWireframyElementsRoutingModule { }
