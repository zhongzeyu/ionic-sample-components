import { Component, OnInit } from '@angular/core';
import {Tab16Page} from '../tab16/tab16.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab20',
  templateUrl: './tab20.page.html',
  styleUrls: ['./tab20.page.scss'],
})
export class Tab20Page implements OnInit {
  currentPopOver;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Tab16Page,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    this.currentPopOver = popover;
    return await popover.present();
  }
  async dismissPopover() {
    if (this.currentPopOver) {
      this.currentPopOver.dismiss().then(() => { this.currentPopOver = null; });
    }
  }
}
