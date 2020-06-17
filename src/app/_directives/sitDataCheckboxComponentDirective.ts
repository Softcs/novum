import { Directive } from '@angular/core';
import { SitDataBaseComponent } from '@app/components/controls/sit-data-base/sit-data-base.component';

@Directive({
    selector: '[sitControl]'
    , providers: [{ provide: SitDataBaseComponent, useExisting: sitDataCheckboxComponentDirective }],
})

export class sitDataCheckboxComponentDirective {

}
