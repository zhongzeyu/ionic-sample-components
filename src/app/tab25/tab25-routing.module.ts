import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab25Page } from './tab25.page';

const routes: Routes = [
  {
    path: '',
    component: Tab25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab25PageRoutingModule {}
