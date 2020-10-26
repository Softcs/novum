import { Component, Input,  Renderer2, ViewEncapsulation, ContentChild, ViewChild } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { MatFormFieldAppearance  } from '@angular/material/form-field';
import { SitRefreshButtonComponent } from '../sit-refresh-button/sit-refresh-button.component';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { LookupService } from '@app/_services/lookup.service';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'sit-data-input',
  templateUrl: './sit-data-input.component.html',
  styleUrls: ['./sit-data-input.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SitDataInputComponent extends SitDataBaseComponent {

  @ViewChild('lookupElement', { static: false }) private lookupElement: MatSelect;
  @ViewChild(SitRefreshButtonComponent)
  refreshButton: SitRefreshButtonComponent;

  @Input() type = 'text';
  @Input() label = '';
  @Input() showRefresh = true;
  @Input() appearance: MatFormFieldAppearance = 'legacy';
  @Input() width: string;
  @Input() showRefreshButton: boolean;
  @Input() refreshOnChange: boolean;
  hasLookup: boolean;
  private lookupSettings = null;
  lookupRows = [{CountrySymbol: 'L'}];
  constructor(
    _renderer: Renderer2,
    private lookupService: LookupService) {
    super(_renderer);
    this.showRefreshButton = false;
    this.refreshOnChange = true;
  }

  onChange(event: any) {
    super.onChange(event);
    this._onFilterKeyEnter(event);
  }

  initLookup() {
    this.lookupSettings = this.dataSetWrapper.getLookupForField(this.field);
    this.hasLookup = this.lookupSettings != null;
    if (this.hasLookup) {

      const lookupDataSourceWrapper = this.dataSetWrapper?.getDataSetManager().getDateSourceWrapper(this.lookupSettings.lookupDataSourceIdent);
      lookupDataSourceWrapper?.afterPropagte.subscribe(ident => this.lookupAfterPropagte(ident));
    }
  }

  public getValue(): string {
    return this.inputElement.nativeElement.value;
  }

  _onFilterKeyEnter(event: any) {
    this.dataSetWrapper.setFieldValue(this.field, this.getValue());
    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
    }
  }

  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
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
    this.lookupService.open(this.dataSetWrapper, activeRow, this.lookupSettings, this.getValue());
  }
  onLookupSelect($event) {
    if (this.lookupSettings && this.lookupSettings.valuesTo) {
      const row = $event.value;
      this.lookupSettings.valuesTo.forEach(valueTo => {
        const fieldValue = row[valueTo.source];
        this.dataSetWrapper.setFieldValue(valueTo.target, fieldValue);
      });
    }
  }

  private lookupAfterPropagte(ident: string) {
    if (this.lookupSettings != null && ident === this.lookupSettings.lookupDataSourceIdent) {
      this.lookupRows.length = 0;
      this.lookupRows.push.apply(this.lookupRows, this.getLookupRows());
      if (this.lookupElement) {
        this.lookupElement.open();
      }
    }
  }


  //#endregion lookup

}
