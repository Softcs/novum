import { Component, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FactoryService } from '@app/_services/factory.service';

@Component({
  selector: 'sit-proc-expander-item-body',
  templateUrl: './sit-proc-expander-item-body.component.html',
  styleUrls: ['./sit-proc-expander-item-body.component.scss']
})
export class SitProcExpanderItemBodyComponent implements OnInit, AfterViewInit {
  @Input() componentFactoryIdent: string;
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private factoryService: FactoryService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  private loadComponent() {
    const componentType = this.factoryService.GetFactory(this.componentFactoryIdent);
    console.log("componentType", componentType);
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    console.log("factory", factory);
    const ref = this.viewContainerRef.createComponent(factory);
    console.log("ref", ref);
    ref.changeDetectorRef.detectChanges();
  }

}
