import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User, Operation } from '@app/_models';
import * as CryptoJS from 'crypto-js';
import { OperationCrypt } from '@app/_models/operationCrypt';

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
        let data = JSON.stringify(listOfOprs);
        let k = "72E93D2A56DB44C3914C811983C6C08E";
        console.log("oprC", data)

        var key = CryptoJS.enc.Utf8.parse(k);
        var iv = CryptoJS.enc.Utf8.parse('7061737323313233');
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });



        data = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
        let oprC = new OperationCrypt();
        oprC.d = data;


        return this.http.post<any>(`${environment.apiUrl}/api/json/gateway/railc`, oprC)
            .pipe(map(railResponse => {
                var decrypted = CryptoJS.AES.decrypt(railResponse.d, key, {
                    keySize: 128 / 8, iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
                });
                railResponse = decrypted.toString(CryptoJS.enc.Utf8);
                return railResponse;
            }));
    }
}
