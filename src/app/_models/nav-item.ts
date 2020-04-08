export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  kind?: string;
  children?: NavItem[];
}
