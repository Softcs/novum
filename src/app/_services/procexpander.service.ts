import { Injectable, Type } from '@angular/core';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';
import { sitProcExpanderItem } from '@app/components/controls/sit-proc-expander/sit-proc-expander-item';
import { Observable } from 'rxjs';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitProcExpanderComponent } from '@app/components/controls/sit-proc-expander';

@Injectable({ providedIn: 'root' })
export class ProcExpanderService {
    constructor() { }
    public openAction(
        procExpander: SitProcExpanderComponent,
        actionDefinition: ActionDefinitionWrapper,
        actionExecuteData: ActionExecuteData)
    {
        procExpander.AddPanel(actionDefinition, actionExecuteData)        ;
    }
}