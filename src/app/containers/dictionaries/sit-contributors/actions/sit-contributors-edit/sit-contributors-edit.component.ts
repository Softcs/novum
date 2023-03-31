import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-contributors-edit',
  templateUrl: './sit-contributors-edit.component.html',
  styleUrls: ['./sit-contributors-edit.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-contributors-edit-component'}
})
export class SitContributorsEditComponent extends SitActionParamsForm  {

}
