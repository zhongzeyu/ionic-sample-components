import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab29Page } from './tab29.page';

const routes: Routes = [
  {
    path: '',
    component: Tab29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab29PageRoutingModule {}
