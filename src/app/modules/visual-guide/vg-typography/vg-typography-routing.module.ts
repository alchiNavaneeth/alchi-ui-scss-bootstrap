import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VgTypographyComponent } from './vg-typography.component';

import { VgTypographyHeadersComponent } from './vg-typography-headers/vg-typography-headers.component';
import { VgTypographyParagraphComponent } from './vg-typography-paragraph/vg-typography-paragraph.component';
import { VgTypographyFontsizeComponent } from './vg-typography-fontsize/vg-typography-fontsize.component';

const routes: Routes = [
  { path: "", component: VgTypographyComponent,
    children: [
      { path: "", redirectTo: "headers", pathMatch: "full" },
      { path: "headers", component: VgTypographyHeadersComponent },
      { path: "paragraph", component: VgTypographyParagraphComponent },
      { path: "fontsize", component: VgTypographyFontsizeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VgTypographyRoutingModule { }
