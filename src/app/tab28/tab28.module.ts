import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab28PageRoutingModule } from './tab28-routing.module';

import { Tab28Page } from './tab28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab28PageRoutingModule
  ],
  declarations: [Tab28Page]
})
export class Tab28PageModule {}
