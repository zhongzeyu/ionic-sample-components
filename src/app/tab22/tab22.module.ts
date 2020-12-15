import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab22PageRoutingModule } from './tab22-routing.module';

import { Tab22Page } from './tab22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab22PageRoutingModule
  ],
  declarations: [Tab22Page]
})
export class Tab22PageModule {}
