import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab26PageRoutingModule } from './tab26-routing.module';

import { Tab26Page } from './tab26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab26PageRoutingModule
  ],
  declarations: [Tab26Page]
})
export class Tab26PageModule {}
