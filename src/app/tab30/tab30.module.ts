import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab30PageRoutingModule } from './tab30-routing.module';

import { Tab30Page } from './tab30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab30PageRoutingModule
  ],
  declarations: [Tab30Page]
})
export class Tab30PageModule {}
