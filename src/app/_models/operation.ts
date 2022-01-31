import { LoginInfo } from './loginInfo';

export class Operation {
    loginInfo: LoginInfo;
    dictident: string;
    oprType: number;
    dataSourcesRequest: any[];
    dataSourceIdent: string;
    actionIdent: string;
    startField: string;
    connection: string;
    selectedRows: any[]
}
