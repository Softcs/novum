import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pulpit',
  templateUrl: 'sit-pulpit.component.html',
  styleUrls: ['sit-pulpit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPulpitComponent implements OnInit {
    loading = false;
    users: User[];
    appVersion = environment.appVersion;

    constructor(
      private userService: UserService,
      ) { }

    ngOnInit() {
    }
}
