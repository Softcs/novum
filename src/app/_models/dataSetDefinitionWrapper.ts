import { ActionDefinitionWrapper } from './actionDefinitionWrapper';
import { Action } from 'rxjs/internal/scheduler/Action';

export class DataSetDefinitionWrapper {
    public ident: string;
    public actions: ActionDefinitionWrapper[];

    constructor(source: any) {
        this.ident = source.ident;
        this.actions = [];
        if (source.actions != null) {
            source.actions.forEach(actionDef => {
                const actionDefWrapper = new ActionDefinitionWrapper(actionDef);
                this.actions.push(actionDefWrapper);
            });
        }
    }

    public FindActionDefinition(ident: string): ActionDefinitionWrapper {
        if (this.actions == null || this.actions.length == 0) {
            return null;
        }
        return this.actions.find(ac => ac.ident ==  ident);
    }
}