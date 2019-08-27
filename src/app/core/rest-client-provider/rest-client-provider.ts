import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export abstract class RestClientProvider {
    protected httpClient: HttpClient;
    protected apiBaseURL: string;
    protected serviceType: string;
    protected apiEndpoints: any;
    env = environment;

    constructor(httpClient: HttpClient, serviceType: string) {
        this.httpClient = httpClient;
        this.serviceType =  serviceType;
        this.apiBaseURL = this.env.apiBaseUrls[serviceType];
        this.apiEndpoints = this.env.apiEndpoints[serviceType];
    }
    protected post(restEndpoint: string, body: any, options?: any): Observable<object> {
        if (options) {
            return this.httpClient.post(this.apiBaseURL.concat(restEndpoint), body, options);
        } else {
            return this.httpClient.post(this.apiBaseURL.concat(restEndpoint), body);
        }
    }
    protected put(restEndpoint: string, body: any): Observable<object> {
        return this.httpClient.post(this.apiBaseURL.concat(restEndpoint), body);
    }

    protected get(restEndpoint: string, body?: any): Observable<object> {
        if (body) {
            return this.httpClient.get(this.apiBaseURL.concat(restEndpoint), body);
        } else {
            return this.httpClient.get(this.apiBaseURL.concat(restEndpoint));
        }
    }
}
