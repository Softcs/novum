export class Company {
    companyIdent: string;
    companyDescription: string;
    companyGUID: string;
    configFile: string;

    constructor(companyIdent: string, companyDescription: string, companyGUID: string, configFile: string) {
        this.companyIdent = companyIdent;
        this.companyDescription = companyDescription;
        this.companyGUID = companyGUID;
        this.configFile = configFile;
    }
}
