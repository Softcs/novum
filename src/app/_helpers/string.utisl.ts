import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StringUtils  {    
    public compareStrings(one, two): boolean {
        return one != null
        && typeof one == 'string'
        && one.localeCompare(two, undefined, { sensitivity: 'base' }) === 0;
      }
}