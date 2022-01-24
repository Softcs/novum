import { Component, Input } from '@angular/core';
import { DataSetManager, DataSetWrapper } from '@app/_models';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';

@Component({
  selector: 'sit-actions-selected-progress',
  templateUrl: './sit-actions-selected-progress.component.html',
  styleUrls: ['./sit-actions-selected-progress.component.scss']
})
export class SitActionsSelectedProgressComponent {

  public actions: ActionDefinitionWrapper[];
  public dataSetResponseWrapper: DataSetWrapper;
  public dataSetManagerSource: DataSetManager;

  public setActions(actions: ActionDefinitionWrapper[]) {
    this.actions.push(...actions);
  }
}
