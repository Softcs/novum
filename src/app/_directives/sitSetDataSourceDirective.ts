import { Input, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: 'sitSetDataSource',
})
export class sitSetDataSourceDirective {
    constructor(private el: ElementRef) {
    }
    @Input() rows;
    @Input() selected;
}
