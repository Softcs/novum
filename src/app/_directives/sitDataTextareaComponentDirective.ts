import { Directive } from '@angular/core';
import { SitDataBaseComponent } from '@app/components/controls/sit-data-base/sit-data-base.component';

@Directive({
  selector: '[sitControl]'
  , providers: [{ provide: SitDataBaseComponent, useExisting: sitDataTextareaComponentDirectiveDirective }],
})
export class sitDataTextareaComponentDirectiveDirective {

}
