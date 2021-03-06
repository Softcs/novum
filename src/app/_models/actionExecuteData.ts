import { DataSetManager } from './dataSetManager';

export class ActionExecuteData {
    parent: string;
    tabIdent: string;
    activeRow: any;
    actionIdent: string;
    sourceDataSetIdent: string;
    dataSetManagerSource: DataSetManager;
    componentParamsIdent: string;
    openKind: string;
    hasInitProc: boolean;
}