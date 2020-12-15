import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-tab17',
  templateUrl: './tab17.page.html',
  styleUrls: ['./tab17.page.scss'],
})
export class Tab17Page implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  async openMenu(){
    await this.menu.open();
  }
}
