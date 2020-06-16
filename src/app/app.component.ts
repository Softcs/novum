import { NavService } from './_services/nav.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from './_services';
import { User } from './_models';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

    @ViewChild('appDrawer') appDrawer: ElementRef;
    currentUser: User;
    tabs = new Array<Tab>();
    activeTab: number = -1;

    constructor(
        private router: Router,
        private gatewayService: GatewayService,
        private navService: NavService,
        private tabService: TabService,
    ) {
        this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
      this.tabService.tabSub.subscribe(tabs => {
        this.tabs = tabs;
        this.activeTab = tabs.findIndex(tab => tab.active);
        });

        // this.router.events.subscribe((res) => {
        //   this.activeTab = this.tabs.indexOf(this.tabs.find(tab => '/'+tab.link === this.router.url));
        //   console.log(this.router.url.replace('/',''),this.activeTab);
        //   if (this.activeTab === -1) {
        //     this.tabService.addTab(new Tab(this.router.url.replace('/',''), this.router.url.replace('/',''), '' , { parent: 'AppComponent' }));
        //   }
      // });

    }

    ngAfterViewInit() {
      this.navService.appDrawer = this.appDrawer;
    }

    tabChanged(link) {
      this.activeTab = this.tabs.findIndex( tab => tab.link === link)
      this.tabService.changeTab( this.tabs.findIndex( tab => tab.link === link) );
      //console.log('tabChanged',this.activeTab, this.tabs,link)
      // window.dispatchEvent(new Event('resize'));
    }

    removeTab(ident: string): void {
      this.tabService.removeTab(this.tabs.findIndex( tab => tab.ident === ident));
      console.log(ident,this.activeTab)
    }

}
