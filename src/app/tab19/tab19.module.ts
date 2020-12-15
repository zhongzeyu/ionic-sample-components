import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab19PageRoutingModule } from './tab19-routing.module';

import { Tab19Page } from './tab19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab19PageRoutingModule
  ],
  declarations: [Tab19Page]
})
export class Tab19PageModule {}
