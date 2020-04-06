export class DictInfoWrapper {
    constructor(private dictInfo: any) {

    }

    get caption() {
        return this.dictInfo.caption;
    }

}