import { Component, Input } from '@angular/core';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';

@Component({
  selector: 'sit-actions-toolbar',
  templateUrl: './sit-actions-toolbar.component.html',
  styleUrls: ['./sit-actions-toolbar.component.scss']
})
export class SitActionsToolbarComponent {
  
  public actions: ActionDefinitionWrapper[];  

  public setActions(actions: ActionDefinitionWrapper[]) {
    this.actions.push(...actions);
  }
}
