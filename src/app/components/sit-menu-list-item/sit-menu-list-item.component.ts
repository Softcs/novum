import { NavItem } from '@app/_models/nav-item';
import { Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../_services/nav.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { FactoryService } from '@app/_services/factory.service';
@Component({
  //selector: '[sit-menu-list-item]',
  selector: 'sit-menu-list-item',
  host: {class: 'sit-menu-list-item'},
  templateUrl: './sit-menu-list-item.component.html',
  styleUrls: ['./sit-menu-list-item.component.scss'],
  encapsulation : ViewEncapsulation.None,
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
  //@HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(
    public navService: NavService,
    public router: Router,
    private tabService: TabService,
    private factoryService: FactoryService
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: NavItem) {

// console.log('item: ', item);


    let createNew = true;
    if ((!item.children || !item.children.length) && item.kind == "app") {
      for ( let i = 0; i < this.tabService.tabs.length; i++ ) {
        if (this.tabService.tabs[i].title === item.caption) {
          this.tabService.changeTab(i);
          createNew = false;
        }
      }

      if ( createNew ) {
        this.tabService.addTab(new Tab(this.factoryService.GetFactory(item.link), item.caption , { parent: 'AppComponent' }));
      }
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
