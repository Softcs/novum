import { Component } from '@angular/core';
export interface NavItem {
  caption: string;
  disabled?: boolean;
  icon: string;
  link?: string;
  kind?: string;
  children?: NavItem[];

}
