export class ActionDefinitionWrapper {
    public createNewRow: boolean;
    public forCurrentRow: boolean;
    public ident: string;
    public kind: string;
    public refreshAfter: boolean;
    public showInToolbar: boolean;
    public editFields: [any];
    public caption: string;
    public fieldsConfiguration: any;
    public color: string;
    public icon: string;
    public componentParamsIdent: string;
    public openKind: string;
    public order: Number;
    public showWhenEmpty: boolean;
    public tooltip: string;
    public hasInitProc: boolean;

    constructor(source: any) {
        this.createNewRow = source.createNewRow;
        this.ident = source.ident;
        this.forCurrentRow = source.forCurrentRow;
        this.kind = source.kind;
        this.refreshAfter = source.refreshAfter;
        this.showInToolbar = source.showInToolbar;
        this.editFields = source.editFields;
        this.caption = source.caption;
        this.fieldsConfiguration = source.fieldsConfiguration;
        this.color = source.color;
        this.icon = source.icon;
        this.componentParamsIdent = source.componentParamsIdent;
        this.openKind = source.openKind;
        this.order = source.order;
        this.showWhenEmpty = source.showWhenEmpty;
        this.tooltip = source.tooltip;
        this.hasInitProc = source.initProc != null;
    }


}