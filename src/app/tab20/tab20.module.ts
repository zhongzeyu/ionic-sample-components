import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab20PageRoutingModule } from './tab20-routing.module';

import { Tab20Page } from './tab20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab20PageRoutingModule
  ],
  declarations: [Tab20Page]
})
export class Tab20PageModule {}
