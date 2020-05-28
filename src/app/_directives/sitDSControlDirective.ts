import {
 Directive,
 ElementRef
} from '@angular/core';

@Directive({
    selector: 'sitDSControl',
})
export class sitDSControlDirective {
    constructor(private el: ElementRef) {
    }
    public name() {
        return this.el.nativeElement.name;
    }
}
