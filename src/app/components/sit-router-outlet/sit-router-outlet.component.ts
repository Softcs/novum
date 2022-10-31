import { ChangeDetectorRef, ComponentFactoryResolver, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet as NgRouterOutlet } from '@angular/router';

@Directive({
    selector: 'sit-router-outlet',
    exportAs: 'outlet'
})
export class SitRouterOutlet implements OnInit, OnDestroy {
    public original: NgRouterOutlet;
    private _name: string;

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        if (this._name) {
            throw new Error('The name of an outlet can\'t be changed');
        }

        this._name = name;
    }

    constructor(
        private parentContexts: ChildrenOutletContexts,
        private location: ViewContainerRef,
        private resolver: ComponentFactoryResolver,
        private changeDetector: ChangeDetectorRef
    ) {

// console.log('this: ', this);
// console.log('this.original: ', this.original);
// console.log('location: ', location);



    }

    public ngOnInit() {
        this.original = new NgRouterOutlet(this.parentContexts, this.location, this.resolver, this._name, this.changeDetector);
        this.original.ngOnInit();
    }

    public ngOnDestroy() {
        this.original.ngOnDestroy();
    }
}
