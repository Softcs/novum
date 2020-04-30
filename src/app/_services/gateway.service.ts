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
    public canUseLocalStorage: boolean;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(this.readCurrentUser());
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public removeCurrentUser() {
        localStorage.removeItem('li');
        sessionStorage.removeItem('li');
        this.currentUserSubject.next(null);
    }
    private readCurrentUser(): User {
        let user = sessionStorage.getItem('li');
        if (user == null) {
            user = localStorage.getItem('li');
            this.canUseLocalStorage = user != null;
        } else {
            this.canUseLocalStorage = true;
        }

        if(user == null) {
            return null;
        }
        let userO: User = JSON.parse( this.decV(user));
        return userO;
    }
    private get getStorage() {
        return this.canUseLocalStorage ? localStorage : sessionStorage;
    }
    public saveCurrentUser() {
        if (this.currentUserValue == null) {
            return;
        }
        if(!this.canUseLocalStorage) {
            localStorage.removeItem('li');
        }

        let user = JSON.stringify(this.currentUserValue);
        user = this.encV(user);
        this.getStorage.setItem('li', user);
    }
    private encV(data) {
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
        return data;
    }
    private decV(data) {
        if (data == null) {
            return null;
        }
        let envK = environment.crypt.key;
        var key = CryptoJS.enc.Utf8.parse(envK);
        var iv = CryptoJS.enc.Utf8.parse(environment.crypt.iv);
        var decrypted = CryptoJS.AES.decrypt(data, key, {
            keySize: 128 / 8, iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    login(username: string, password: string) {
        var user = new User();
        user.password = password;
        user.username = username;
        user.token = null;
        this.currentUserSubject.next(user);
        const oprLogin: Operation = this.operationLogin();
        return oprLogin;
    }

    logout() {
        // remove user from local storage to log user out
        this.removeCurrentUser();
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
        opr.loginInfo.username = this.currentUserValue?.username;
        opr.loginInfo.password = this.currentUserValue?.password;

        const listOfOprs = [];
        listOfOprs.push(opr);
        let data = JSON.stringify(listOfOprs);
        data = this.encV(data);
        let oprC = new OperationCrypt();
        oprC.d = data;

        return this.http.post<any>(`${environment.apiUrl}/api/json/gateway/railc`, oprC)
            .pipe(map(railResponse => {
                railResponse = this.decV(railResponse.d);
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
