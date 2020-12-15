import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab30',
  templateUrl: './tab30.page.html',
  styleUrls: ['./tab30.page.scss'],
})
export class Tab30Page implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
  async handleButtonClick() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Paired successfully',
      
    });

    await toast.present();
  }
}
