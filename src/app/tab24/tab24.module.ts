import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab24PageRoutingModule } from './tab24-routing.module';

import { Tab24Page } from './tab24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab24PageRoutingModule
  ],
  declarations: [Tab24Page]
})
export class Tab24PageModule {}
