import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab23PageRoutingModule } from './tab23-routing.module';

import { Tab23Page } from './tab23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab23PageRoutingModule
  ],
  declarations: [Tab23Page]
})
export class Tab23PageModule {}
