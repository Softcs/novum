import { ActionExecutionKind } from "@app/_consts/ActionExecutionKind";
import { ActionExecuteData } from "./actionExecuteData";
import { ActionVisibilityRule } from "./actionVisibilityRule";

export class ActionDefinitionWrapper {
    private _executionModeCalculated: ActionExecutionKind;
    public createNewRow: boolean;
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
    public visibility: ActionVisibilityRule;
    public hasInitProc: boolean;
    public operationType: string;
    public executionMode: ActionExecutionKind;

    constructor(source: any) {
        this.createNewRow = source.createNewRow;
        this.ident = source.ident;
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
        this.visibility = source.visibility;
        this.hasInitProc = source.initProc != null;
        this.operationType = source.operationType;
        this.executionMode = source.executionMode ?? ActionExecutionKind.Default;
    }

    public get isDelete(): boolean {
    return (this.kind === 'delete' || this.kind === 'D');
    }

    public get isInsert(): boolean {
    return (this.kind === 'insert' || this.kind === 'I');
    }

    public get isUpdate(): boolean {
    return (this.kind === 'update' || this.kind === 'U');
    }

    public get executionModeCalculated() : ActionExecutionKind {
        if (this.executionMode == ActionExecutionKind.Default) {
            if (this._executionModeCalculated == null) {
                if (this.isDelete) {
                    this._executionModeCalculated = ActionExecutionKind.RunOneByOne;
                } else if (this.isInsert || this.isUpdate) {
                    this._executionModeCalculated = ActionExecutionKind.OnlyForCurrent;
                } else {
                    this._executionModeCalculated = ActionExecutionKind.RunOneByOne;
                }
            }
        }
        return this._executionModeCalculated;
    }

    public get forSelectedRows(): boolean {
        return this.executionModeCalculated == ActionExecutionKind.AllInOne ||
            this.executionModeCalculated == ActionExecutionKind.RunOneByOne;
    }

    /*
    Default,
    RunOneByOne,
    OnlyForCurrent,
    AllInOne
    */

}