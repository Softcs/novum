import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

export const sitGlobalConfig = {
  frameworkComponents: {
    gridCheckboxRenderer: GridCheckboxRenderer,
  },
  excelStyles: [
    {
      id: 'header',
      font: {
          fontName: "Calibri",
          size: 12,
          bold: true
      },
      interior: {
        color: '#ebebe0',
        pattern: 'Solid',
      },
    },
    {
      id: 'font12',
      font: { fontName: "Calibri", size: 12, }
    },
    {
      id: 'textFormat',
      dataType: 'string',
    },
    {
      id: 'blueBackground',
      interior: {
        color: '#cce6ff',
        pattern: 'Solid',
      },
    },
    {
      id: 'pinkBackground',
      interior: {
        color: '#ffe6e6',
        pattern: 'Solid',
      },
    },
    {
      id: 'greenBackground',
      interior: {
        color: '#d6f5d6',
        pattern: 'Solid',
      },
    },
    {
      id: 'yellowBackground',
      interior: {
        color: '#fcf59f',
        pattern: 'Solid',
      },
    },
    {
      id: 'dateFormat',
      dataType: 'dateTime',
      numberFormat: { format: 'yyyy-mm-dd;@' },
    },
    {
      id: 'numberFormatInt',
      numberFormat: { format: '#,##0' },
    },
    {
      id: 'numberFormat2Dec',
      numberFormat: { format: '#,##0.00' },
    },
    {
      id: 'numberFormatPercent',
      numberFormat: { format: '#,##0[$%]' },
    },
    {
      id: 'textFormat',
      dataType: 'string',
    },
  ]

}
