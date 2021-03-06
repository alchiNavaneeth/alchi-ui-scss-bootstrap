import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDirective } from './directives/common.directive';
import { AnchorjsLinkDirective } from './directives/common.directive'
import { ClipboardDirective } from './directives/common.directive'
import { FiIconBoxDirective } from './directives/common.directive';
import { AvatarIconBoxDirective } from './directives/common.directive';
import { CopyColorDirective } from './directives/common.directive'

@NgModule({
  declarations: [
    CommonDirective,
    CopyColorDirective,
    AnchorjsLinkDirective,
    ClipboardDirective,
    FiIconBoxDirective,
    AvatarIconBoxDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonDirective,
    CopyColorDirective,
    AnchorjsLinkDirective,
    ClipboardDirective,
    FiIconBoxDirective,
    AvatarIconBoxDirective
  ]
})
export class SharedModule { }
