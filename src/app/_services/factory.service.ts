import { Injectable, Type } from '@angular/core';
import { SitJPKVatComponent } from '@app/containers/dictionaries/sit-jpk-vat';
import { SitKancelariaComponent } from '@app/containers/dictionaries/sit-kancelaria';
import { SitMenuComponent } from '@app/containers/dictionaries/sit-menu';
import { SitProjectsPubComponent } from '@app/containers/dictionaries/sit-projects-pub';
import { SitRailConfigurationsComponent } from '@app/containers/dictionaries/sit-rail-configurations';
import { SitRozrachunkiInsertGTComponent } from '@app/containers/dictionaries/sit-rozrachunki-insert-gt';
import { SitUserAccountComponent } from '@app/containers/dictionaries/sit-user-account';
import { SitWhiteListVATComponent } from '@app/containers/dictionaries/sit-white-list-vat';
import { SitCustomersComponent } from '@app/containers/dictionaries/sit-customers';
import { SitProductsComponent } from '@app/containers/dictionaries/sit-products';
import { SitDocumentsComponent } from '@app/containers/dictionaries/sit-documents';
import { SitRailConfigurationsEditComponent } from
'@app/containers/dictionaries/sit-rail-configurations/actions/sit-rail-configurations-edit';

@Injectable({ providedIn: 'root' })
export class FactoryService {
    constructor() { }

    classes = {
        sitJPKVat: SitJPKVatComponent,
        sitKancelaria: SitKancelariaComponent,
        sitMenu: SitMenuComponent,
        sitProjectsPub: SitProjectsPubComponent,
        sitRailConfigurations: SitRailConfigurationsComponent,
        sitRozrachunkiInsertGT: SitRozrachunkiInsertGTComponent,
        sitUserAccount: SitUserAccountComponent,
        sitWhiteListVat: SitWhiteListVATComponent,
        sitCustomers: SitCustomersComponent,
        sitProducts: SitProductsComponent,
        sitDocuments: SitDocumentsComponent,
        sitRailConfigurationsEdit: SitRailConfigurationsEditComponent
    };

    public GetFactory(ident: string) {
        const factory = this.classes[ident];
        if (factory == null) {
            console.error(`You need to register component [${ident}]in factory service!`);
        }
        return factory;
    }
}