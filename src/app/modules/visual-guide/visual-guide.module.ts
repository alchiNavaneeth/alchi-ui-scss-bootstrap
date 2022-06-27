import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './visual-guide-routing.module';
import { RouterModule } from '@angular/router';

import { VisualGuideRoutingModule } from './visual-guide-routing.module';
import { VisualGuideComponent } from './visual-guide.component';


@NgModule({
  declarations: [
    VisualGuideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    VisualGuideRoutingModule
  ],
  exports: [
    VisualGuideComponent
  ]
})
export class VisualGuideModule { }
