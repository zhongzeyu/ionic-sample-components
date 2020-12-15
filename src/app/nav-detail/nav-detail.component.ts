import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-nav-detail',
  templateUrl: './nav-detail.component.html',
  styleUrls: ['./nav-detail.component.scss'],
})
export class NavDetailComponent implements OnInit {
  @Input() tech:{};
  @Input() nav:IonNav
  constructor() {
   }

  ngOnInit() {}
  back(){
    if(this.nav.canGoBack){
      this.nav.pop();
    }    
  }

}
