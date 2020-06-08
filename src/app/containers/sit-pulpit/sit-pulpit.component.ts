import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pulpit',
  templateUrl: 'sit-pulpit.component.html',
  styleUrls: ['sit-pulpit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPulpitComponent implements OnInit {
    loading = false;
    users: User[];


    constructor(
      private userService: UserService,
      ) { }

    ngOnInit() {
    }
}
