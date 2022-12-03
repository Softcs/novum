import { Component, Input } from '@angular/core';
import { DataSetManager, DataSetWrapper } from '@app/_models';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';

@Component({
  selector: 'sit-actions-toolbar',
  templateUrl: './sit-actions-toolbar.component.html',
  styleUrls: ['./sit-actions-toolbar.component.scss'],
  host: {class: 'sit-actions-toolbar-component'}
})
export class SitActionsToolbarComponent {
  
  public actions: ActionDefinitionWrapper[];  
  public dataSetResponseWrapper: DataSetWrapper;
  public dataSetManagerSource: DataSetManager;

  public setActions(actions: ActionDefinitionWrapper[]) {
    this.actions.push(...actions);
  }
}
