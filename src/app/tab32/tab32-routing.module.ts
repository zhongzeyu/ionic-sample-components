import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab32Page } from './tab32.page';

const routes: Routes = [
  {
    path: '',
    component: Tab32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab32PageRoutingModule {}
