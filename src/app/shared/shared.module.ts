import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDirective } from './directives/common.directive';
import { AnchorjsLinkDirective } from './directives/common.directive'
import { ClipboardDirective } from './directives/common.directive'

@NgModule({
  declarations: [
    CommonDirective,
    AnchorjsLinkDirective,
    ClipboardDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonDirective,
    AnchorjsLinkDirective,
    ClipboardDirective
  ]
})
export class SharedModule { }
