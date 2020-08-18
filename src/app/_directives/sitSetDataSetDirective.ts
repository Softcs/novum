import { Input, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: 'sitSetDataSource',
})
export class sitSetDataSetDirective {
    constructor(private el: ElementRef) {
    }
    @Input() rows;
    @Input() rowData;
    @Input() selected;
}
