import { Component, OnInit, Input, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { sitProcExpanderItem } from './sit-proc-expander-item';
import { FactoryService } from '@app/_services/factory.service';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';
import { ActionExecuteData } from '@app/_models/actionExecuteData';

@Component({
  selector: 'sit-proc-expander',
  templateUrl: './sit-proc-expander.component.html',
  styleUrls: ['./sit-proc-expander.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { 'class': 'sit-proc-expander' }
})
export class SitProcExpanderComponent implements OnInit {
  @Input()
  public items: Array<sitProcExpanderItem>;

  constructor() {

  }

  ngOnInit(): void {
    this.items = new Array<sitProcExpanderItem>();
  }

  public AddPanel(actionDefinition: ActionDefinitionWrapper, actionExecuteData: ActionExecuteData) {
    const panelItem = new sitProcExpanderItem();
    panelItem.actionExecuteData = actionExecuteData;
    panelItem.ident = actionExecuteData.tabIdent;
    panelItem.caption = actionDefinition.caption;
    panelItem.componentFactoryIdent = actionExecuteData.componentParamsIdent;
    this.items.push(panelItem);
  }

}
