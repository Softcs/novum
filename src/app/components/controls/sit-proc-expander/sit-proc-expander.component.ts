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

  private activatePanel(item: sitProcExpanderItem) {
    this.items.forEach(it => it.isOpen = false);
    item.isOpen = true;
  }

  public AddPanel(actionDefinition: ActionDefinitionWrapper, actionExecuteData: ActionExecuteData) {
    const ident = actionExecuteData.actionIdent;
    const existingItem = this.items.find(item => item.ident === ident);
    if (existingItem) {
      this.activatePanel(existingItem);
      return;
    }
    const panelItem = new sitProcExpanderItem();
    panelItem.actionExecuteData = actionExecuteData;
    panelItem.ident = ident;
    panelItem.caption = actionDefinition.caption;
    panelItem.componentFactoryIdent = actionExecuteData.componentParamsIdent;
    panelItem.isOpen = true;
    this.items.forEach(item => item.isOpen = false);
    this.items.push(panelItem);
  }

  public Close(actionExecuteData: ActionExecuteData) {
    const index = this.items.findIndex( p => p.ident == actionExecuteData.actionIdent);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  public onHeaderClick(item) {
    item.isOpen = !item.isOpen;
  }

}
