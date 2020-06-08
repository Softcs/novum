import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User, Operation } from '@app/_models';
import * as CryptoJS from 'crypto-js';
import { OperationCrypt } from '@app/_models/operationCrypt';
import { LoginInfo } from '@app/_models/loginInfo';
import { Company } from '@app/_models/company';

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

    public setCurrentUser(user: User) {
        this.currentUserSubject.next(user);
    }


    private readCurrentUser(): User {
        let user = sessionStorage.getItem('li');
        if (user == null) {
            user = localStorage.getItem('li');
            this.canUseLocalStorage = user != null;
        } else {
            this.canUseLocalStorage = false;
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

    createUser(username: string, password: string): User {
        const user = new User();
        user.password = password;
        user.username = username;
        user.token = null;
        user.connection = null;
        user.company = null;
        return user;
    }

    login(username: string, password: string) {
        const user = this.createUser(username,password);
        const oprLogin: Operation = this.operationLogin(user);
        return oprLogin;
    }

    logout() {
        // remove user from local storage to log user out
        this.removeCurrentUser();
    }
    operationLogin(user: User) {
        const opr: Operation = new Operation();
        if(user != null) {
            opr.loginInfo = new LoginInfo();
            opr.loginInfo.username = user.username;
            opr.loginInfo.password = user.password;
            opr.loginInfo.token = user.token;
        }
        opr.oprType = 10;
        return opr;
    }

    operationGetDictInfo(dictident: string): Operation {
        const opr: Operation = new  Operation();
        opr.dictident = dictident;
        opr.oprType = 30;

        return opr;
    }
    operationRefreshDataSources(dictIdent: string, dataSourcesRequest: any[]): Operation {
        const opr: Operation = new Operation();
        opr.dictident = dictIdent;
        opr.oprType = 40;
        opr.dataSourcesRequest = dataSourcesRequest;
        return opr;
    }
    operationExecuteAction(dictIdent: string, dataSourcesRequest: any[], actionIdent: string, dataSourceIdent: string) {
        const opr: Operation = new Operation();
        opr.dictident = dictIdent;
        opr.oprType = 50;
        opr.actionIdent = actionIdent;
        opr.dataSourceIdent = dataSourceIdent;
        opr.dataSourcesRequest = dataSourcesRequest;
        return opr;
    }

    executeOperation(opr: Operation) {
        if (opr.loginInfo == null) {
            opr.loginInfo = new LoginInfo();
            opr.loginInfo.username = this.currentUserValue?.username;
            opr.loginInfo.password = this.currentUserValue?.password;
            opr.loginInfo.token = this.currentUserValue?.token;
        }
        opr.connection = this.currentUserValue?.connection;

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
                if (railResponse != null && railResponse.length > 0) {
                    if(railResponse[0].Errors != null) {
                        railResponse[0].Errors.forEach(error => {
                            console.error(error.message);
                        });
                    }
                    if (railResponse[0].dataSourcesResponse != null) {
                        railResponse[0].dataSourcesResponse.forEach(ds => {
                            if(ds.Errors != null) {
                                ds.Errors.forEach(error => {
                                    console.error(error.message);
                                });
                            }
                        });
                    }

                }
                if (railResponse.length > 0 ) {
                    const resData = railResponse[0];
                    if (this.currentUserValue != null) {
                        this.currentUserValue.token = resData.token;
                    }
                    if (this.currentUserValue != null && resData.companyConfig && this.currentUserValue.connection == null) {
                        this.currentUserValue.company = new Company(
                                resData.companyConfig.companyIdent,
                                resData.companyConfig.companyDescription);
                        this.currentUserValue.connection = resData.companyConfig.configFile;
                    }

                    if (resData.forceLogout){
                        this.removeCurrentUser();
                    }
                }
                return railResponse;
            }));
    }
}
