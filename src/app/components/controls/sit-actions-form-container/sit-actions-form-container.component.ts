// import { Component, OnInit } from '@angular/core';
import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'sit-actions-form-container',
  templateUrl: './sit-actions-form-container.component.html',
  styleUrls: ['./sit-actions-form-container.component.scss'],
  host: {class: 'sit-actions-form-container-component'},
  encapsulation : ViewEncapsulation.None,
})

export class SitActionsFormContainerComponent {
}
