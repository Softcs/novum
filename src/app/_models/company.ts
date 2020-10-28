export class Company {
    companyIdent: string;
    companyDescription: string;
    companyGUID: string;
    constructor(companyIdent: string, companyDescription: string, companyGUID: string) {
        this.companyIdent = companyIdent;
        this.companyDescription = companyDescription;
        this.companyGUID = companyGUID;
    }
}
