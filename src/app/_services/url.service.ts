import { Injectable } from '@angular/core';
import { User } from '@app/_models';
import { environment } from '@environments/environment';
import { GatewayService } from '@app/_services';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  currentUser: User;

  constructor(
    protected gatewayService: GatewayService,
  ) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    }

  getAttachmentUrl( sitAttachmentsG:  string, fileName: string): string {
    return environment.apiUrl
        + '/service/attachments/get/'
        + this.currentUser.token + '/'
        + this.currentUser.connection + '/'
        + sitAttachmentsG + '/'
        + (fileName ? fileName : "noFileName");
  }

  getSecureRepUrl( dictGuid: string, rt: string, rg: string, params: any,){
    let par = new URLSearchParams(params).toString();
    return environment.apiUrl
        + '/service/show/security/report/'
        + this.currentUser.company.companyGUID + '/'
        + this.currentUser.token +'/'
        + dictGuid +'?'
        + 'rg=' + rg + '&'
        + 'rt=' + rt + '&'
        + par;
  }

  getAnonymousRepUrl( guid: string ){
    return environment.apiUrl
        + '/service/show/anonymous/report/'
        + this.currentUser.company.companyGUID + '/'
        + guid
  }
}
