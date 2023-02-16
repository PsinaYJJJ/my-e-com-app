import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallPopUpDirective } from './small-pop-up.directive';



@NgModule({
  declarations: [SmallPopUpDirective],
  imports: [
    CommonModule
  ],
  exports: [SmallPopUpDirective]
})
export class SmallPopUpModule { }
