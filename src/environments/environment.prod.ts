import { apiEndpoints } from 'src/environments/rest-api-endpoints';
import { AppConfig } from 'src/app/shared/models/interfaces/app-config/app-config';

export const appConfig: AppConfig = {
  environment: 'PRODUCTION',
  description: 'Application is available for Customers - LIVE',
  production: true,
  apiBaseUrls: {'api-1': 'https://prod.service.com:8780/appcontext/',
  'api-2': 'https://prod.service.com:8785/appcontext/'
},
  // tslint:disable-next-line:object-literal-shorthand
  apiEndpoints: apiEndpoints
};
export const environment = Object.assign(appConfig);


