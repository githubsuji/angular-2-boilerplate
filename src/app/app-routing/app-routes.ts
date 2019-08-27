import { APP_ROUTE_NAMES } from 'src/app/app-routing/app-routes-names';
import { HomeComponent } from 'src/app/views/home/home.component';
import { AppLoginComponent } from '../app-login/app-login.component';
import { AppPageNotFoundComponent } from '../app-page-not-found/app-page-not-found.component';
import { AppAccessDeniedComponent } from '../app-access-denied/app-access-denied.component';
import { AuthorizationGuard as PermissionGuard } from '../core/guards/authorization-guard/authorization.guard';
import { APP_OUTLETS } from '../app-outlets/app-outlet-names';
import { AppEnvCheckComponent } from '../app-env-check/app-env-check.component';

export const APP_ROUTES = [
  {
    path: APP_ROUTE_NAMES.EMPTY_PATH,
    canActivate: [PermissionGuard],
    canActivateChild: [PermissionGuard],
    children: [
      { path: APP_ROUTE_NAMES.EMPTY_PATH, redirectTo: APP_ROUTE_NAMES.LOGIN_PATH, pathMatch: 'full' },
      { path: APP_ROUTE_NAMES.ENV_CHECK_PATH, component: AppEnvCheckComponent},
      { path: APP_ROUTE_NAMES.HOME_PATH, component: HomeComponent },
      { path: APP_ROUTE_NAMES.LOGIN_PATH, component: AppLoginComponent },
      { path: APP_ROUTE_NAMES.DENIED_PATH, component: AppAccessDeniedComponent },
      // All your other routes should come first
      { path: APP_ROUTE_NAMES.NOT_FOUND_PATH, component: AppPageNotFoundComponent},
      { path: APP_ROUTE_NAMES.NOT_MATCHED_PATH, redirectTo: APP_ROUTE_NAMES.NOT_FOUND_PATH }
    ]
  }
];

