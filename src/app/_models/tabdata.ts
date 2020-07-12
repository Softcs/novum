import { DataSetManager } from './dataSetManager';

export class TabData {
    parent: string;
    tabIdent: string;
    activeRow: any;
    actionIdent: string;
    sourceDataSetIdent: string;
    dataSetManagerSource: DataSetManager;
}