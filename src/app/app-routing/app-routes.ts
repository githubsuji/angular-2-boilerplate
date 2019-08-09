import { appRoutesNames } from 'src/app/app-routing/app-routes-names';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { HomeComponent } from 'src/app/views/home/home.component';


export const APP_ROUTES = [
 // { path: appRoutesNames.NOT_FOUND_PATH, component: PageNotFoundComponent },
  { path: appRoutesNames.EMPTY_PATH, redirectTo: appRoutesNames.HOME_PATH, pathMatch : 'full'},
  { path: appRoutesNames.HOME_PATH, component: HomeComponent}
];

