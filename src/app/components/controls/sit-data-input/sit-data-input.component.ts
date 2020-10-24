import { Component, Input,  Renderer2, ViewEncapsulation, ContentChild, ViewChild } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { MatFormFieldAppearance  } from '@angular/material/form-field';
import { SitRefreshButtonComponent } from '../sit-refresh-button/sit-refresh-button.component';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { LookupService } from '@app/_services/lookup.service';

@Component({
  selector: 'sit-data-input',
  templateUrl: './sit-data-input.component.html',
  styleUrls: ['./sit-data-input.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SitDataInputComponent extends SitDataBaseComponent {

  @ViewChild('lookupElement') private autocomplete: MatAutocomplete;
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
  lookupRows = ['Ładuję'];
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
    return record+"AAAA";
  }

  getLookupRecord() {
    const dataSourceLookup = this.dataSetWrapper.getDataSetManager().getDateSourceWrapper(this.lookupSettings.lookupDataSourceIdent);
    if (!dataSourceLookup) {
      return;
    }
    return dataSourceLookup.rows;
  }

  onLookupOpen(isOpen) {
    if (!isOpen) {
      return;
    }
    const activeRow = this.dataSetWrapper.activeRow;
    this.lookupService.open(this.dataSetWrapper, activeRow, this.lookupSettings, this.getValue());
  }
  onLookupSelect($event) {

    console.log("s", $event)
    console.log("SS", this.lookupSettings)
  }


  //#endregion lookup
  protected afterPropagte(ident: string) {
    super.afterPropagte(ident);
    if (this.lookupSettings != null && ident == this.lookupSettings.lookupDataSourceIdent) {
      console.log("a");
    }
  }

}
