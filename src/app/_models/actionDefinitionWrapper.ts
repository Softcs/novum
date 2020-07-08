import { support } from 'jquery';

export class ActionDefinitionWrapper {
    public createNewRow: boolean;
    public forCurrentRow: boolean;
    public ident: string;
    public kind: string;
    public refreshAfter: boolean;
    public showInToolbar: boolean;
    public editFields: [any];
    public caption: string;

    constructor(source: any) {
        this.createNewRow = source.createNewRow;
        this.ident = source.ident;
        this.forCurrentRow = source.forCurrentRow;
        this.kind = source.kind;
        this.refreshAfter = source.refreshAfter;
        this.showInToolbar = source.showInToolbar;
        this.editFields = source.editFields;
        this.caption = source.caption;
    }


}