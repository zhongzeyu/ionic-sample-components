import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { stringify } from 'querystring';
import {Tab16Page} from '../tab16/tab16.page'
@Component({
  selector: 'app-tab18',
  templateUrl: './tab18.page.html',
  styleUrls: ['./tab18.page.scss'],
})
export class Tab18Page implements OnInit {
  currentModal;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: Tab16Page,
      cssClass: 'my-custom-class',
      componentProps: {//pass the parameter
        'nameList': ['Finn','Han'],
        'modalCtrl':this,
      }
    });
    this.currentModal=modal;
    return await modal.present();
    
  }
  
  public dismiss(param) {
    if (this.currentModal) {
      this.currentModal.dismiss().then(() => { this.currentModal = null; });
      alert('closed param is ' + stringify(param));
    }
  }
}
