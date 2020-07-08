import { Directive, ElementRef, Input } from '@angular/core';
import { DataSetWrapper } from '@app/_models/dataSetWrapper';

@Directive({
     selector: 'sitAction'
    })
export class SitActionDirective {
    constructor(public el: ElementRef) {
    }

    @Input() actionIdent: string;

    public actionDefinition;

    public dataSetResponseWrapper: DataSetWrapper;

}