import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [/** SERVICES ARE HERE */]
})
export class CoreModule {
   constructor(@Optional() @SkipSelf() core: CoreModule) {
      if (core) {
        throw new Error('You shall nor Run !!!');
      }
   }
 }
