import { Directive, ElementRef, Input } from '@angular/core';
import { DataSetWrapper } from '@app/_models/dataSetWrapper';
import { DataSetManager } from '@app/_models/dataSetManager';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';

@Directive({
     selector: 'sitAction'
    })
export class SitActionDirective {
    protected _actionDefinition: ActionDefinitionWrapper;
    constructor(public el: ElementRef) {
    }

    @Input() actionIdent: string;
    @Input()
    public set actionDefinition(action: ActionDefinitionWrapper) {
        this._actionDefinition = action;
    }

    public get actionDefinition(): ActionDefinitionWrapper{ 
        return this._actionDefinition;
    }

    public dataSetResponseWrapper: DataSetWrapper;
    public dataSetManagerSource: DataSetManager;

}