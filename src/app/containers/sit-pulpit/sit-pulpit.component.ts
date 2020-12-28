import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pulpit',
  templateUrl: 'sit-pulpit.component.html',
  styleUrls: ['sit-pulpit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPulpitComponent {
    loading = false;
    users: User[];
    appVersion = environment.appVersion;
    get serverVersion() {
      return this.gatewayService.serverVersion;
    }

    constructor(
      private gatewayService: GatewayService
      ) { }
}
