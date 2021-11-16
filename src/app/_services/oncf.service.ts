import { Injectable } from '@angular/core';
import { DataSetWrapper } from '@app/_models';
import { Guid } from 'guid-typescript';

@Injectable({ providedIn: 'root' })
export class OnCFService {
    private rowsChecker : any = {};
    valueChange(field: string, fieldValue, dataSetWrapper: DataSetWrapper) {
        if (!dataSetWrapper || !dataSetWrapper.hasOnCF || !dataSetWrapper.onCFFields[field]) {
            return;
        }

        var rowId = dataSetWrapper.getFieldIdValue();
        this.rowsChecker[rowId] = Guid.create();
        console.log(`Field ${field} value ${fieldValue}, rowId ${this.rowsChecker[rowId]}`);
        

    }
}
