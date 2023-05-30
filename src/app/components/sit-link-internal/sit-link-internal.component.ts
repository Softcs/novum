// import { NavItem } from '@app/_models/nav-item';
import { Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { FactoryService } from '@app/_services/factory.service';


interface Item {
  caption: string, 
  kind: string,
  link: string , 
  tabName: string, 
};


@Component({
  selector: 'sit-link-internal, [sit-link-internal]',
  templateUrl: './sit-link-internal.component.html',
  styleUrls: ['./sit-link-internal.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-link-internal-component'}
})
export class SitLinkInternalComponent implements OnInit {

  @Input('item') item: Item;
  _dafaultItem = {
    caption: 'Brak caption', 
    kind: undefined,
    link: undefined, 
    tabName: 'Brak tabName',
  };
  itemLink: string;


  constructor(
    public router: Router,
    private tabService: TabService,
    private factoryService: FactoryService
  ) {
  }


  ngOnInit(): void {

    this.item = { ...this._dafaultItem, ...this.item };

    switch (this.item.kind) {
      case 'app':
          // this.itemLink = '#' + this.item.link;
          this.itemLink = '';
        break;
      case 'http':
        this.itemLink = this.item.link;
        break;
      default:
    }

  }

  onItemSelected(item: Item) 
  {

// console.log('item: ', item);

    let createNew = true;
    
    if (item.kind == "app") {

      for ( let i = 0; i < this.tabService.tabs.length; i++ ) {

        // if (this.tabService.tabs[i].title === item.caption) 
        if (this.tabService.tabs[i].component.name === item.link.charAt(0).toUpperCase() + item.link.slice(1) + 'Component') 
        {
          this.tabService.changeTab(i);
          createNew = false;
        }
      }

      if ( createNew ) {
        this.tabService.addTab(new Tab(this.factoryService.GetFactory(item.link), item.tabName , { parent: 'AppComponent' }));
      }

    }

    if (item.kind == "http") {
      window.open(item.link, "_blank");
    }

  }

}
