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
        console.log("this.el", this.el);
        return this.el.nativeElement.name;
    }
}
