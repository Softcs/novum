import { Component, Input, ComponentFactoryResolver, ViewChild, OnInit } from '@angular/core';
import { ContentContainerDirective } from '@app/_directives/content-container.directive';
import { SkeletonComponent } from '@app/components/sit-skeleton/sit-skeleton.component';
import { Tab } from '@app/_models/tab.model';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  host: {class: 'router-flex app-tab-content'}
  })

export class TabContentComponent implements OnInit {

  @Input() tab;
  @ViewChild(ContentContainerDirective, { static: true })
  contentContainer: ContentContainerDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const tab: Tab = this.tab;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      tab.component
    );
    const viewContainerRef = this.contentContainer.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as SkeletonComponent).data = tab.tabData;
  }

}
