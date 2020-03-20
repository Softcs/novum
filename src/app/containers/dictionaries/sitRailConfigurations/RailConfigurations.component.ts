import { Component, OnInit } from '@angular/core';


import { GatewayService } from '@app/_services';
import { DictContainerComponent } from '../../../components/dict-container';
import { DataSourceContainerComponent } from '../../../components/data-source-container';

@Component({
    templateUrl: 'RailConfigurations.component.html',
    styleUrls: ['RailConfigurations.component.scss']
})
export class RailConfigurationsComponent extends DictContainerComponent implements OnInit {
    constructor(gatewayService: GatewayService) {
        super(gatewayService);
        this.ident = 'sitRailConfigurations';
    }

    ngOnInit() {
        super.ngOnInit();
    }



}
