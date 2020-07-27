import { Component, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FactoryService } from '@app/_services/factory.service';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'sit-proc-expander-item-body',
  templateUrl: './sit-proc-expander-item-body.component.html',
  styleUrls: ['./sit-proc-expander-item-body.component.scss']
})
export class SitProcExpanderItemBodyComponent implements OnInit, AfterViewInit {
  @Input() componentFactoryIdent: string;
  @Input() actionExecuteData: ActionExecuteData;
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
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const ref = this.viewContainerRef.createComponent(factory);
    (ref as unknown as SitActionParamsForm).actionExecuteData = this.actionExecuteData;
    ref.changeDetectorRef.detectChanges();
  }

}
