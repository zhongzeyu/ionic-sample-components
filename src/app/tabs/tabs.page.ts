import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public tabArray:TabOne[] = [{iconname: "chatbox",label: "Action Sheet"},
  {iconname: "images",label: "Photos"},
  {iconname: "chatbox-ellipses",label: "Alert"},
  {iconname: "tablet-landscape",label: "Badge"},
  {iconname: "tablet-landscape",label: "Button"},
  {iconname: "film",label: "Card"},
  {iconname: "checkbox",label: "Chechbox"},
  {iconname: "hardware-chip",label: "Chip"},
  {iconname: "phone-portrait",label: "Content"},
  {iconname: "calendar",label: "Date & Time"},
  {iconname: "add-circle",label: "Floating Action Button"},
  {iconname: "grid",label: "Grid"},
  {iconname: "pin",label: "Infinite Scroll"},
  {iconname: "phone-landscape",label: "Input"},
  {iconname: "pricetags",label: "Item"},
  {iconname: "list",label: "List"},
  {iconname: "menu",label: "Menu"},
  {iconname: "log-in",label: "Modal"},
  {iconname: "navigate",label: "Navigation"},
  {iconname: "chatbubble",label: "Popover"},
  {iconname: "code-working",label: "Progress Indicators"},
  {iconname: "radio-button-off",label: "Radio"},
  {iconname: "reorder-two",label: "Refresher"},
  {iconname: "git-compare",label: "Reorder"},
  {iconname: "git-merge",label: "Routing"},
  {iconname: "search",label: "Searchbar"},
  {iconname: "file-tray-stacked",label: "Segment"},
  {iconname: "caret-down",label: "Select"},
  {iconname: "albums",label: "Slides"},
  {iconname: "reader",label: "Toast"},
  {iconname: "toggle",label: "Toggle"},
  {iconname: "hammer",label: "Toolbar"},
];
  constructor() {
  }

}
export interface TabOne{
  iconname: string;
  label: string;
}

