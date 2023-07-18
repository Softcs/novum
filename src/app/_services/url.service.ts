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

  getImageUrl( sitAttachmentsG:  string, fileName: string): string {
    return environment.apiUrl
        + '/service/attachments/get/'
        + this.currentUser.token + '/'
        + this.currentUser.connection + '/'
        + 'images/get/'
        + sitAttachmentsG + '/'
        + (fileName ? fileName : "noFileName");
  }

  getSecureRepUrl( dictGuid: string, rt: string, rg: string, params: any,){
    let par = new URLSearchParams(params).toString();
    if (!dictGuid) { return };
    return environment.apiUrl
        + '/service/show/security/report/'
        + this.currentUser.company.companyGUID + '/'
        + this.currentUser.token +'/'
        + dictGuid +'?'
        + 'rg=' + rg + '&'
        + 'rt=' + rt + '&'
        + par;
  }

  getSecureRepFileNameUrl( dictGuid: string, rt: string, rg: string, params: any, fileName: string,){
    let par = new URLSearchParams(params).toString();
    if (!dictGuid) { return };
    return environment.apiUrl
        + '/service/show/security/report/'
        + this.currentUser.company.companyGUID + '/'
        + this.currentUser.token +'/'
        + dictGuid +'/'
        + fileName +'?'
        + 'rg=' + rg + '&'
        + 'rt=' + rt + '&'
        + par;
  }  

  getAnonymousRepUrl( guid: string ){
    return `${environment.apiUrl}/service/show/anonymous/report/${this.currentUser.company.companyGUID}/${guid}`;
  }

  getGenXLSUrl(activeRow: any){
    return `${environment.apiUrl}/service/temporary/generate/${this.currentUser.token}/${this.currentUser.connection}?download=1&identity=${activeRow['__Identity__']}`;
  }

  getImportTemplateUrl(templateFileName: string, templateFullFileName: string): string {
    return `${environment.apiUrl}/service/attachments/get/${this.currentUser.token}/${this.currentUser.connection}/importTemplates/download/${templateFileName}/${templateFullFileName ? templateFullFileName : "noFileName"}`;
  }

  getAttachmentDownLoadUrl(fileName: string, fullFileName: string): string {
    return `${environment.apiUrl}/service/attachments/get/${this.currentUser.token}/${this.currentUser.connection}/attachments/download/${fileName}/${fullFileName ? fullFileName : "noFileName"}`;
  }

}
