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

    valueChange(fieldName: string, fieldValue: any, dataSetWrapper: DataSetWrapper) {

// console.error(' - - - - - OnCFService valueChange START - - - - - ');
// console.log('OnCFService valueChange: fieldName: ', fieldName);
// console.log('OnCFService valueChange: fieldValue: ', fieldValue);
// console.error(' - - - - - OnCFService valueChange START - - - - - ');


        if (!dataSetWrapper || !dataSetWrapper.hasOnCF || !dataSetWrapper.onCFFields[fieldName]) {
            return;
        }        
        var dataSetManager = dataSetWrapper.getDataSetManager();
        var rowId = dataSetWrapper.getFieldIdValue();
        this.rowsChecker[rowId] = Guid.create();        
        this.executeOnCF(
            dataSetManager,            
            dataSetWrapper.ident,
            fieldName,
            dataSetWrapper
        );
    }    

    private executeOnCF(dataSetManager:DataSetManager, 
                        dataSourceIdent: string, 
                        startField: string, 
                        dsWrapper: DataSetWrapper) {
        var activeRow = dsWrapper.activeRow;
        var dataSetRequest = dataSetManager.getObjectForDataSourceRequest(dsWrapper, true);        
        const opr: Operation = this.gatewayService.operationOnCF(dataSetManager.dictIdent, dataSourceIdent, startField, dataSetRequest);
        
        dataSetManager.ExecuteOnCF(opr,            
            (initRow) => this.onCFCompleted(dsWrapper, initRow, activeRow),
            this.onCFException,
            () => dsWrapper.lockPostRecord(activeRow), 
            () => dsWrapper.onCFFinally(activeRow));
    }

    private onCFCompleted(dsWrapper, initRow, activeRow) {
        dsWrapper.initRowByInitRow(initRow, dsWrapper.activeRow);
    }

    private onCFException(self) {

    }   
}
