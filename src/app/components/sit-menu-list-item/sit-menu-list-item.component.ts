import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavItem} from '../../_models/nav-item';
import {NavService} from '../../_services/nav.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

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

  constructor(public navService: NavService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: NavItem) {
    if ((!item.children || !item.children.length) && item.kind == "app") {
      this.router.navigate([item.link]);
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
