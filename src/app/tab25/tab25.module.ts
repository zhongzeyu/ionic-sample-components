import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab25PageRoutingModule } from './tab25-routing.module';

import { Tab25Page } from './tab25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab25PageRoutingModule
  ],
  declarations: [Tab25Page]
})
export class Tab25PageModule {}
