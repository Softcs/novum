import { ActionDefinitionWrapper } from './actionDefinitionWrapper';
import { DataSetManager } from './dataSetManager';

export class ActionExecuteData {
    parent: string;
    tabIdent: string;
    activeRow: any;
    generatedRow: any;
    actionIdent: string;
    sourceDataSetIdent: string;
    dataSetManagerSource: DataSetManager;
    componentParamsIdent: string;
    openKind: string;
    hasInitProc: boolean;
    actionDefinition: ActionDefinitionWrapper;
}