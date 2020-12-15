import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab31PageRoutingModule } from './tab31-routing.module';

import { Tab31Page } from './tab31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab31PageRoutingModule
  ],
  declarations: [Tab31Page]
})
export class Tab31PageModule {}
