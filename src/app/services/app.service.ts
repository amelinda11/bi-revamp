import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';

@Injectable({
    providedIn: 'root'
})

export class AppService {
    protected config = AppConfig.settings.apiServer;

    constructor(private httpClient: HttpClient) { }

    // NEW API
    doLogin(userDetail: any): Observable<any> {
        return this.httpClient.post(this.config.MASTER_SERVICE_BASE_URL + '/login', userDetail);
    }

}
