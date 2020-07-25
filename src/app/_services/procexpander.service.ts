import { Injectable, Type } from '@angular/core';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';
import { sitProcExpanderItem } from '@app/components/controls/sit-proc-expander/sit-proc-expander-item';
import { Observable } from 'rxjs';
import { ActionExecuteData } from '@app/_models/actionExecuteData';

@Injectable({ providedIn: 'root' })
export class ProcExpanderService {
    constructor() { }
    public openAction(
        items: Array<sitProcExpanderItem>,
        actionDefinition: ActionDefinitionWrapper,
        actionExecuteData: ActionExecuteData)
    {
        const item = new sitProcExpanderItem();
        item.caption = actionDefinition.caption;
        items.push(item);
        console.log("items", items);
    }
}