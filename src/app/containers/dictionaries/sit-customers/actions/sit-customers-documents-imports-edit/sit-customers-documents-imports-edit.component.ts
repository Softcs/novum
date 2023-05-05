import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-customers-documents-imports-edit',
  templateUrl: './sit-customers-documents-imports-edit.component.html',
  styleUrls: ['./sit-customers-documents-imports-edit.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-customers-documents-imports-edit-component'}
})
export class SitCustomersDocumentsImportsEditComponent extends SitActionParamsForm  {

}
