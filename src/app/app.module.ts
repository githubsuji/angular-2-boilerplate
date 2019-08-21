import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserIdleModule } from 'angular-user-idle';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';
import { AppAccessDeniedComponent } from './app-access-denied/app-access-denied.component';
import { AppPageLoaderComponent } from './app-page-loader/app-page-loader.component';
/** For Doc - https://www.npmjs.com/package/angular-user-idle
 * https://github.com/rednez/angular-user-idle/blob/master/projects/angular-user-idle/src/lib/angular-user-idle.service.ts
 */


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppLoginComponent,
    AppPageNotFoundComponent,
    AppAccessDeniedComponent,
    AppPageLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule.forRoot(),
    // Optionally you can set time for `idle`, `timeout` and `ping` in seconds.
    // Default values: `idle` is 600 (10 minutes), `timeout` is 300 (5 minutes)
    // and `ping` is 120 (2 minutes).
    UserIdleModule.forRoot({idle: 20, timeout: 20, ping: 0})
    // UserIdleModule.forRoot({ idle: 600, timeout: 120, ping: 0 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
