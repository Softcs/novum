import { Injectable } from '@angular/core';
import { User } from '@app/_models';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AttachmentsService {
    getUrl(user: User , sitAttachmentsG:  string, fileName: string): string {
        return environment.apiUrl
            + '/service/attachments/get/'
            + user.token + '/'
            + user.connection + '/'
            + sitAttachmentsG + '/'
            + (fileName ? fileName : "noFileName");
    }
}
