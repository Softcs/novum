import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';
import { ActionExecuteData } from '@app/_models/actionExecuteData';

export class sitProcExpanderItem {
    public ident: string;
    public caption: string;
    public actionDefinitionWrapper: ActionDefinitionWrapper;
    public isOpen: boolean;
    public componentFactoryIdent: string;
    public actionExecuteData: ActionExecuteData;
    constructor() {

    }
}

