import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab30Page } from './tab30.page';

const routes: Routes = [
  {
    path: '',
    component: Tab30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab30PageRoutingModule {}
