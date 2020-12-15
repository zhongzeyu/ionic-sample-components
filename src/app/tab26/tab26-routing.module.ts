import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab26Page } from './tab26.page';

const routes: Routes = [
  {
    path: '',
    component: Tab26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab26PageRoutingModule {}
