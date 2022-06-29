import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualGuideComponent } from './modules/visual-guide/visual-guide.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'visual-guide', pathMatch: 'full' },
  { path: 'visual-guide', component: VisualGuideComponent,
    children: [
      { path: '', redirectTo: 'typography', pathMatch: 'full' },
      { path: "typography", loadChildren: () => import('./modules/visual-guide/vg-typography/vg-typography.module').then(m => m.VgTypographyModule) },
      { path: "colors", loadChildren: () => import('./modules/visual-guide/vg-colors/vg-colors.module').then(m => m.VgColorsModule) }
    ]
  },
  { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: '**', redirectTo: '404-not-found' }
];

