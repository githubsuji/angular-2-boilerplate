import { appRoutesNames } from 'src/app/app-routing/app-routes-names';
import { HomeComponent } from 'src/app/views/home/home.component';
import { AppLoginComponent } from '../app-login/app-login.component';
import { AppPageNotFoundComponent } from '../app-page-not-found/app-page-not-found.component';


export const APP_ROUTES = [
  { path: appRoutesNames.EMPTY_PATH, redirectTo: appRoutesNames.LOGIN_PATH, pathMatch : 'full'},
  { path: appRoutesNames.HOME_PATH, component: HomeComponent},
  { path: appRoutesNames.LOGIN_PATH, component: AppLoginComponent},
  // All your other routes should come first
  { path: appRoutesNames.NOT_FOUND_PATH, component: AppPageNotFoundComponent },
  {path: appRoutesNames.NOT_MATCHED_PATH, redirectTo: appRoutesNames.NOT_FOUND_PATH}
];

