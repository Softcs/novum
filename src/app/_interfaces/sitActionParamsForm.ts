import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { Input, OnInit, Directive, ViewChild } from '@angular/core';
import { SitProcParamsComponent } from '@app/components/sit-proc-params';


@Directive()
export class SitActionParamsForm implements OnInit{
    @ViewChild(SitProcParamsComponent) procParams: SitProcParamsComponent;

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

    get activeRow() : any {
        return this.procParams?.activeRow;
    }

    public fieldValue(fieldName: string): any {
        if (!this.procParams?.activeRow) {
            return null;
        }
        return this.procParams?.activeRow[fieldName];        
    }

    public expression(fieldName: string, value: any) {
        return this.fieldValue(fieldName) == value;
    }

    ngOnInit(): void {

    }
}