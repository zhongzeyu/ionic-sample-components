import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab32PageRoutingModule } from './tab32-routing.module';

import { Tab32Page } from './tab32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab32PageRoutingModule
  ],
  declarations: [Tab32Page]
})
export class Tab32PageModule {}
