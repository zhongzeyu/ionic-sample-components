import { Component, OnInit,Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tab16',
  templateUrl: './tab16.page.html',
  styleUrls: ['./tab16.page.scss'],
})
export class Tab16Page implements OnInit {
  @Input() nameList: [];
  @Input() modalCtrl;
  constructor() { }

  ngOnInit() {
    if(this.nameList.length > 0){
      alert("received param is " + this.nameList);
    }
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    if(this.modalCtrl){
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }
    
  }
  
}
