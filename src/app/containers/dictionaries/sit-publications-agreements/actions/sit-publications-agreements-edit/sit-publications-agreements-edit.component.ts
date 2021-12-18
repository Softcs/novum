import { Component, OnInit } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-publications-agreements-edit',
  templateUrl: './sit-publications-agreements-edit.component.html',
  styleUrls: ['./sit-publications-agreements-edit.component.scss']
})
export class SitPublicationsAgreementsEditComponent extends SitActionParamsForm  implements OnInit {

  sellAfterRightsKind: boolean;

  constructor(){
    super();
    console.log(this);
    this.sellAfterRightsKind = true;
  }

  ngOnInit(): void {
    this.sellAfterRightsKind = (this.actionExecuteData.activeRow['SellAfterRightsKind']===1) ? true : false;
    console.log(this.sellAfterRightsKind);
  }

  onClick($event): void {
    this.sellAfterRightsKind = (this.actionExecuteData.activeRow['SellAfterRightsKind']===1) ? true : false;
    console.log(this.sellAfterRightsKind);
  }
}
