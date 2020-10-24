import { Injectable } from '@angular/core';
import { DataSetWrapper } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class LookupService {
    constructor() {
    }

    open(dataSetWrapper: DataSetWrapper, activeRow, lookupSettings, fieldValue) {
        const dataSetManager = dataSetWrapper.getDataSetManager();

        dataSetManager.Refresh([lookupSettings.lookupDataSourceIdent]);
    }
}
