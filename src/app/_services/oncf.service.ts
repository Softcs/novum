import { Injectable } from '@angular/core';
import { DataSetManager, DataSetWrapper, Operation } from '@app/_models';
import { Guid } from 'guid-typescript';
import { first } from 'rxjs/operators';
import { GatewayService } from '.';

@Injectable({ providedIn: 'root' })
export class OnCFService {    
    private rowsChecker : any = {};   

    constructor(private gatewayService: GatewayService) {

    }

    valueChange(field: string, fieldValue, dataSetWrapper: DataSetWrapper) {
        if (!dataSetWrapper || !dataSetWrapper.hasOnCF || !dataSetWrapper.onCFFields[field]) {
            return;
        }
        var dataSetManager = dataSetWrapper.getDataSetManager();
        var rowId = dataSetWrapper.getFieldIdValue();
        this.rowsChecker[rowId] = Guid.create();        
        this.executeOnCF(
            dataSetManager,            
            dataSetWrapper.ident,
            field,
            dataSetWrapper
        );
    }    

    private executeOnCF(dataSetManager:DataSetManager, dataSourceIdent: string, startField: string, dsWrapper: DataSetWrapper) {
        var dataSetRequest = dataSetManager.getObjectForDataSourceRequest(dsWrapper, true);        
        const opr: Operation = this.gatewayService.operationOnCF(dataSetManager.dictIdent, dataSourceIdent, startField, dataSetRequest);
        dataSetManager.ExecuteOnCF(opr,            
            (initRow) => this.onCFCompleted(dsWrapper, initRow),
            this.onCFException);
    }

    private onCFCompleted(dsWrapper, initRow) {
        dsWrapper.initRowByInitRow(initRow, dsWrapper.activeRow);
    }

    private onCFException(self) {

    }
}
