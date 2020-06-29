import { NavItem } from '@app/_models/nav-item';
import { Component, HostBinding, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../_services/nav.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { SitJPKVatComponent } from '@app/containers/dictionaries/sit-jpk-vat';
import { SitKancelariaComponent } from '@app/containers/dictionaries/sit-kancelaria/';
import { SitMenuComponent } from '@app/containers/dictionaries/sit-menu';
import { SitProjectsPubComponent } from '@app/containers/dictionaries/sit-projects-pub';
import { SitRailConfigurationsComponent } from '@app/containers/dictionaries/sit-rail-configurations';
import { SitRozrachunkiInsertGTComponent } from '@app/containers/dictionaries/sit-rozrachunki-insert-gt';
import { SitUserAccountComponent } from '@app/containers/dictionaries/sit-user-account';
import { SitWhiteListVATComponent } from '@app/containers/dictionaries/sit-white-list-vat';
@Component({
  selector: 'sit-menu-list-item',
  templateUrl: './sit-menu-list-item.component.html',
  styleUrls: ['./sit-menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SitMenuListItemComponent {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  classes = {
    sitJPKVat: SitJPKVatComponent,
    sitKancelaria: SitKancelariaComponent,
    sitMenu: SitMenuComponent,
    sitProjectsPub: SitProjectsPubComponent,
    sitRailConfigurations: SitRailConfigurationsComponent,
    sitRozrachunkiInsertGT: SitRozrachunkiInsertGTComponent,
    sitUserAccount: SitUserAccountComponent,
    sitWhiteListVat : SitWhiteListVATComponent
  }

  constructor(
    public navService: NavService,
    public router: Router,
    private tabService: TabService
              ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: NavItem) {
    let createNew = true;

    if ((!item.children || !item.children.length) && item.kind == "app") {
      this.tabService.addTab(new Tab(item.link, item.link, item.caption , { parent: 'AppComponent' }));
      this.navService.closeNav();
    }

    if ((!item.children || !item.children.length) && item.kind == "http") {
      window.open(item.link, "_blank");
      this.navService.closeNav();
    }

    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}
