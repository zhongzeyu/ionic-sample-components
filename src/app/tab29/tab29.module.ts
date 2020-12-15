import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab29PageRoutingModule } from './tab29-routing.module';

import { Tab29Page } from './tab29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab29PageRoutingModule
  ],
  declarations: [Tab29Page]
})
export class Tab29PageModule {}
