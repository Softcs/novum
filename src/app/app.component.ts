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
    activeTab: number = 0;

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

      this.router.events.subscribe((res) => {
          this.activeTab = this.tabs.indexOf(this.tabs.find(tab => '/'+tab.link === this.router.url));
          if (this.activeTab === -1 && this.router.url != '/' && this.router.url != '/login') {
            this.tabService.addTab(new Tab(
                  this.router.url.replace('/',''),
                  this.router.url.replace('/',''),
                  this.router.config[this.router.config.findIndex(r => r.path === this.router.url.replace('/',''))].data['title'],
                  { parent: 'AppComponent' }));
            //console.log('url',this.router.url,this.router.config[this.router.config.findIndex(r => r.path === this.router.url.replace('/',''))].data['title']);

          }
        });

    }

    ngAfterViewInit() {
      this.navService.appDrawer = this.appDrawer;
    }

    tabChanged(ident) {
      this.tabService.changeTab( this.tabs.findIndex( tab => tab.ident === ident) );
      console.log('tabChanged',this.tabs)
      // window.dispatchEvent(new Event('resize'));
    }

    removeTab(ident: string): void {
      console.log('kliknięcie',ident,this.activeTab)
      this.tabService.removeTab(this.tabs.findIndex( tab => tab.ident === ident));
    }

}
