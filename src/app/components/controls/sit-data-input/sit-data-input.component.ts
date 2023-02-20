import { Component, Input,  Renderer2, ViewEncapsulation, ViewChild, NgZone, OnInit } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { MatFormFieldAppearance  } from '@angular/material/form-field';
import { SitRefreshButtonComponent } from '../sit-refresh-button/sit-refresh-button.component';
import { LookupService } from '@app/_services/lookup.service';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { OnCFService } from '@app/_services/oncf.service';

@Component({
  selector: 'sit-data-input',
  templateUrl: './sit-data-input.component.html',
  styleUrls: ['./sit-data-input.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-data-input-component'},
})
export class SitDataInputComponent extends SitDataBaseComponent {

  @ViewChild('lookupElement', { static: false }) private lookupElement: MatSelect;
  @ViewChild(SitRefreshButtonComponent)
  refreshButton: SitRefreshButtonComponent;

  numberFormatedType: boolean = false;
  numberFormatedTypeRegexClear: any;
  numberFormatedTypeRegexFieldPattern: any;
  isValidField: boolean = true;  // tymczasowa zmienna do prostej validacji


  @Input() type = 'text';
  @Input() label = '';
  @Input() showRefresh = true;
  @Input() appearance: MatFormFieldAppearance = 'legacy';
  @Input() width: string;
  @Input() showRefreshButton: boolean;
  @Input() refreshOnChange: boolean;
  @Input() lookupDisplayFields: string[] = null;
  @Input() digitsInfo: string;
  //@Input() digitsInfo: string = '1.0-0';
  @Input() required: boolean;


  hasLookup: boolean;
  lookupIsLoading = false;
  id: string;

  private lookupSettings = null;
  private _lookupRows = new BehaviorSubject<any[]>([]);

  lookupSubscriber: Subscription;
  lookupTimeout: any;

  get lookupRows() {
    return this._lookupRows.asObservable();
  }

  constructor(
    renderer: Renderer2,
    oncfService: OnCFService,
    private lookupService: LookupService,
    private ngZone: NgZone) {
      super(renderer);

      this.showRefreshButton = false;
      this.refreshOnChange = false;
      this.id = this.newGuid();
  }


  // public valueIsNumber(val: any): boolean { 
  //   return typeof val === 'number'; 
  // }

  get Required(): boolean {
    return this.required === undefined ? false : true;
  }

  get IsInvalidField(): boolean {
    return !this.isValidField;
  }

  // funkcja zwracająca value|null do wyświetlenia w elemencie formatującym
  get numberValueToFormatedView(): any {

    // if (!this.value) {
    //   return null;
    // }

    return parseFloat(this.value) ? this.value : null;

  }
  

  ngOnInit() {
    
    if (this.type === 'number' && this.digitsInfo) {
      this.numberFormatedType = true;
      this.numberFormatedTypeRegexClear = new RegExp("\\d+(?:[.]\\d{" + this.digitsInfo.slice(-1) + "})", 'g');
      this.numberFormatedTypeRegexFieldPattern = "\\d+(?:[.,]\\d{1," + this.digitsInfo.slice(-1) + "})?";
    }

  }

  public getValid(): boolean {
    return this.inputElement.nativeElement.​​​validity.valid;
  }

  public getValidationMessage(): string {
    return this.inputElement.nativeElement.​​​validationMessage;
  }

  public setIsValidField(value: boolean) {
    this.isValidField = value;
  }



  onBlur(event: any) {
    this.setIsValidField(this.getValid());
    super.onBlur(event);
  }

  onChange(event: any) {
    super.onChange(this.getValue());
    this._onFilterKeyEnter(event);
  }

  detachEvents() {
    this.lookupSubscriber?.unsubscribe();
  }

  initLookup() {
    if (this.readonly) {
      return;
    }

    this.lookupSettings = this.dataSetWrapper.getLookupForField(this.field);
    this.hasLookup = this.lookupSettings != null;
    if (this.hasLookup) {
      this._lookupRows.next([]);
      const lookupDataSourceWrapper = this.dataSetWrapper?.getDataSetManager()
                                        .getDateSourceWrapper(this.lookupSettings.lookupDataSourceIdent);

      this.lookupSubscriber = lookupDataSourceWrapper?.lookupAfterPropagte.subscribe(ident => this.lookupAfterPropagte(ident));
    }
  }

  public getValue(): string {
    return this.inputElement.nativeElement.value.trim();
  }

  _onFilterKeyEnter(event: any) {
    super.onChange(this.getValue());
    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
    }
  }

  public afterSetDataSetWrapper() {
    this.refreshButton?.setDataSetWrapper(this.dataSetWrapper);
    this.initLookup();
  }
//#region lookup
  public getLookupValue(record: any) {
    return record;
  }

  public getLookupDisplay(record: any) {
    return record[this.field];
  }

  getLookupRows() {
    const dataSourceLookup = this.dataSetWrapper.getDataSetManager().getDateSourceWrapper(this.lookupSettings.lookupDataSourceIdent);
    if (!dataSourceLookup) {
      return;
    }
    return dataSourceLookup.rows;
  }

  onLookupOpen() {
    const activeRow = this.dataSetWrapper.activeRow;
    this.lookupIsLoading = true;
    this.lookupService.open(this.dataSetWrapper, activeRow, this.lookupSettings, this.getValue());
  }

  onLookupSelect($event) {
    if (this.lookupSettings && this.lookupSettings.valuesTo) {
      const row = $event.value;

      this.lookupSettings.valuesTo.forEach(valueTo => {
        const fieldValue = row[valueTo.source];
        this.dataSetWrapper.setFieldValue(valueTo.target, fieldValue, null, false);
      });
    }
  }

  private lookupAfterPropagte(ident: string) {
    if (this.lookupSettings != null && ident === this.lookupSettings.lookupDataSourceIdent) {
      if (this.lookupElement) {
        this.ngZone.run( () => {
          this._lookupRows.next(this.getLookupRows());
          setTimeout(() => this.lookupElement.open(), 10);
        });

        this.lookupIsLoading = false;
      }
    }
  }




  onKeyup(event: any) {

    let __valTempLocal: any = false;

    if (this.numberFormatedType) {

//     //pattern="\d+(?:[.,]\d{1,2})?"

      // __valTempLocal = this.getValue().replace(/[^0-9.,]/, '').replace(/[,]/g, '.');
      __valTempLocal = this.getValue().replace(/[^0-9.,]+/, '').replace(/(\.|,)+/g, '.');

      if (__valTempLocal.slice(0) === '.') {
        __valTempLocal = '0' + __valTempLocal;
      }

      let val_3 = __valTempLocal.match(this.numberFormatedTypeRegexClear);
      __valTempLocal = val_3 && val_3[0] ? val_3[0] : __valTempLocal;

      this._renderer.setProperty(this.inputElement.nativeElement, 'value', __valTempLocal);

    }

    let localVal: any = __valTempLocal ? __valTempLocal : this.getValue();

// console.log('onKeyup' + this.label + ': validationMessage: ', this.inputElement.nativeElement.validationMessage);
// console.log('onKeyup' + this.label + ': ​​​validity: ', this.inputElement.nativeElement.​​​validity);
// console.log('onKeyup' + this.label + ': valid: ', this.inputElement.nativeElement.​​​validity.valid);
// console.log(' onKeyup: END - - - - - - - - - - - - - - - - - ');

    this.setIsValidField(this.getValid());

    // jc end --------------------



    // super.onKeyup(this.getValue());
    super.onKeyup(localVal);

    if (!this.hasLookup) { 
      return; 
    }

    clearTimeout(this.lookupTimeout);
    this.lookupTimeout = setTimeout(() => {
      // super.onChange(this.getValue());
      super.onChange(localVal);
      this.onLookupOpen();
    }, 500);
  }
  //#endregion lookup

  onKeyupEnter(event: any) {
    super.onChange(this.getValue());
    this.dataSetWrapper.RefreshChildren();
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
