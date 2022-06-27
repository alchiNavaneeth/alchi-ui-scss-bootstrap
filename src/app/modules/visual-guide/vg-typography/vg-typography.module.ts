import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VgTypographyRoutingModule } from './vg-typography-routing.module';
import { VgTypographyComponent } from './vg-typography.component';
import { VgTypographyHeadersComponent } from './vg-typography-headers/vg-typography-headers.component';
import { VgTypographyParagraphComponent } from './vg-typography-paragraph/vg-typography-paragraph.component';
import { VgTypographyFontsizeComponent } from './vg-typography-fontsize/vg-typography-fontsize.component';

import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [
    VgTypographyComponent,
    VgTypographyHeadersComponent,
    VgTypographyParagraphComponent,
    VgTypographyFontsizeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VgTypographyRoutingModule
  ]
})
export class VgTypographyModule { }
