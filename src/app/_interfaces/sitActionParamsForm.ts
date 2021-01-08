import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { Input, OnInit, Directive } from '@angular/core';


@Directive()
export class SitActionParamsForm implements OnInit{
    @Input() actionExecuteData: ActionExecuteData;

    get actionIdent(): string {
        return this.actionExecuteData?.actionIdent;
    }

    get isInsert(): boolean {
        return this.actionExecuteData?.actionIdent === 'insert';
    }

    get isUpdate(): boolean {
        return this.actionExecuteData?.actionIdent === 'update';
    }

    get isDelete(): boolean {
        return this.actionExecuteData?.actionIdent === 'delete';
    }

    ngOnInit(): void {

    }
}