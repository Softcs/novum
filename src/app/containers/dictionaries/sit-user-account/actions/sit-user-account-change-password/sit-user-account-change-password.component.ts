import { Component, OnInit, Input } from '@angular/core';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-user-account-change-password',
  templateUrl: './sit-user-account-change-password.component.html',
  styleUrls: ['./sit-user-account-change-password.component.scss']
})
export class SitUserAccountChangePasswordComponent implements OnInit {
  @Input() actionExecuteData: ActionExecuteData;

  constructor() { }

  ngOnInit(): void {
  }

}
