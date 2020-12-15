import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab21PageRoutingModule } from './tab21-routing.module';

import { Tab21Page } from './tab21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab21PageRoutingModule
  ],
  declarations: [Tab21Page]
})
export class Tab21PageModule {}
