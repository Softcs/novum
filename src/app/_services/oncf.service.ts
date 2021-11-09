import { Injectable } from '@angular/core';
import { DataSetWrapper } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class OnCFService {
    valueChange(field: string, fieldValue, dataSetWrapper: DataSetWrapper) {
        console.log(`Field ${field} value ${fieldValue}`);
    }
}
