﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User, Operation } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class GatewayService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public lastAuthBasic: string;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.lastAuthBasic = null;
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    login(username: string, password: string) {
        this.lastAuthBasic = window.btoa(username + ':' + password);
        return this.http.post<any>(`${environment.apiUrl}/api/authentication/auth`, {  })
            .pipe(map(user => {
                this.lastAuthBasic = user.token != null ?  window.btoa(username + ':' + password) : null;
                if (this.lastAuthBasic) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                } else {
                    this.logout();
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    operationGetDictInfo(dictident: string): Operation {
        const opr: Operation = new  Operation();
        opr.dictident = dictident;
        opr.oprType = 1;

        return opr;
    }
    operationRefreshDataSources(dictident: string, dataSourcesRequest: any[]): Operation {
        const opr: Operation = new Operation();
        opr.dictident = dictident;
        opr.oprType = 2;
        opr.dataSourcesRequest = dataSourcesRequest;
        return opr;
    }
    executeOperation(opr: Operation) {
        const listOfOprs = [];
        listOfOprs.push(opr);

        return this.http.post<any>(`${environment.apiUrl}/api/json/gateway/rail`, listOfOprs)
            .pipe(map(railResponse => {
                return railResponse;
            }));
    }
}
