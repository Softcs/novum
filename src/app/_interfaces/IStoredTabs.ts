import { Tab } from "@app/_models/tab.model";

export interface IStoredTabs {
    tabs: Tab[];
    activeTabIndex: number
}