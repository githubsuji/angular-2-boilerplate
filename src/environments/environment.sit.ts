import { apiEndpoints } from 'src/environments/rest-api-endpoints';
import { AppConfig } from 'src/app/shared/models/interfaces/app-config/app-config';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const appConfig: AppConfig = {
  environment: 'SIT',
  description: 'Application is under construction - Debugging is enabled here!',
  production: false,
  apiBaseUrls: {'api-1': 'https://sit.service.com:8780/appcontext/',
                'api-2': 'https://sit.service.com:8785/appcontext/'
  },
  // tslint:disable-next-line:object-literal-shorthand
  apiEndpoints: apiEndpoints



};
export const environment = Object.assign(appConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
