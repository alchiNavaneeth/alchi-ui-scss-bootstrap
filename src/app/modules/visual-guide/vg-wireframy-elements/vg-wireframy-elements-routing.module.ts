import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgWireChatComponent } from './vg-wire-chat/vg-wire-chat.component';
import { VgWireIcongroupsComponent } from './vg-wire-icongroups/vg-wire-icongroups.component';
import { VgWireNotificationComponent } from './vg-wire-notification/vg-wire-notification.component';
import { VgWireSteppersComponent } from './vg-wire-steppers/vg-wire-steppers.component';
import { VgWireframyElementsComponent } from './vg-wireframy-elements.component';

const routes: Routes = [
  { path: "", component: VgWireframyElementsComponent,
    children: [
      { path: "steppers", component: VgWireSteppersComponent },
      { path: "icon-groups", component: VgWireIcongroupsComponent },
      { path: "notification", component: VgWireNotificationComponent },
      { path: "chat-bubble", component: VgWireChatComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgWireframyElementsRoutingModule { }
