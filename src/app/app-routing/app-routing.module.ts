import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from 'src/app/app-routing/app-routes';
import { config } from 'src/app/app-routing/app-routing-config';



@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
