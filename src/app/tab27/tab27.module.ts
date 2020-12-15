import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab27PageRoutingModule } from './tab27-routing.module';

import { Tab27Page } from './tab27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab27PageRoutingModule
  ],
  declarations: [Tab27Page]
})
export class Tab27PageModule {}
