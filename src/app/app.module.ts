import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ExtraOptions, PreloadAllModules, ActivatedRouteSnapshot  } from '@angular/router';

import { RegularsModule } from './regulars/regulars.module';
import { VisualGuideModule } from './modules/visual-guide/visual-guide.module';

import { appRoutes } from './app-routing.module';

import { AppComponent } from './app.component';


const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy       : PreloadAllModules,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule,
   RouterModule.forRoot(appRoutes, routerConfig),
   RegularsModule,
   VisualGuideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
