import { Component, OnInit, Input } from '@angular/core';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';

@Component({
  selector: 'sit-actions-toolbar',
  templateUrl: './sit-actions-toolbar.component.html',
  styleUrls: ['./sit-actions-toolbar.component.scss']
})
export class SitActionsToolbarComponent implements OnInit {

  @Input() sitActionsTable: ActionDefinitionWrapper[]; // tabela z definicjami akcji do rekurencyjnego wyswietlenia
  @Input() componentParamsIdent: string; // parametry przekazywane do sit-proc-buttona
  
  constructor() { }

  ngOnInit(): void {
    console.log("Actions table from toolbar: " + this.sitActionsTable);
  }
}
