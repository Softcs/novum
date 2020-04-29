import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User, Operation } from '@app/_models';
import * as CryptoJS from 'crypto-js';
import { OperationCrypt } from '@app/_models/operationCrypt';
import { LoginInfo } from '@app/_models/loginInfo';

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
        var user = new User();
        user.password = password;
        user.username = username;
        user.token = null;
        this.currentUserSubject.next(user);
        const oprLogin: Operation = this.operationLogin();
        this.executeOperation(oprLogin)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.length === 1) {


                    }
                },
                error => {
                    console.error("error", error);
                });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    operationLogin() {
        const opr: Operation = new Operation();
        opr.oprType = 10;
        return opr;
    }

    operationGetDictInfo(dictident: string): Operation {
        const opr: Operation = new  Operation();
        opr.dictident = dictident;
        opr.oprType = 30;

        return opr;
    }
    operationRefreshDataSources(dictident: string, dataSourcesRequest: any[]): Operation {
        const opr: Operation = new Operation();
        opr.dictident = dictident;
        opr.oprType = 40;
        opr.dataSourcesRequest = dataSourcesRequest;
        return opr;
    }
    executeOperation(opr: Operation) {
        opr.loginInfo = new LoginInfo();
        opr.loginInfo.username = this.currentUserValue.username;
        opr.loginInfo.password = this.currentUserValue.password;
        opr.loginInfo.token = this.currentUserValue.token;

        const listOfOprs = [];
        listOfOprs.push(opr);
        let data = JSON.stringify(listOfOprs);
        let envK = environment.crypt.key;
        var key = CryptoJS.enc.Utf8.parse(envK);
        var iv = CryptoJS.enc.Utf8.parse(environment.crypt.iv);
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
                railResponse = JSON.parse(railResponse);
                if (railResponse != null && railResponse.length > 0 && railResponse[0].Errors != null) {
                    railResponse[0].Errors.forEach(error => {
                        console.error(error.Message);
                    });
                }
                return railResponse;
            }));
    }
}
