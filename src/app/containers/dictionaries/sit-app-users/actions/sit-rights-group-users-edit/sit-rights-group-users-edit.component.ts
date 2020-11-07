import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
@Component({
  selector: 'app-sit-rights-group-users-edit',
  templateUrl: './sit-rights-group-users-edit.component.html',
  styleUrls: ['./sit-rights-group-users-edit.component.scss']
})
export class SitRightsGroupUsersEditComponent extends SitActionParamsForm{
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;


  setGroup() {
    console.log(this.dictContainer);
    if (this.dictContainer?.activeRow('sitRightsGroupUsersEdit')['sitAppUsersG']) {
        return true;
      }
    return false;
  }

}
