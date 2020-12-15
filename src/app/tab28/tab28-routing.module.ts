import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab28Page } from './tab28.page';

const routes: Routes = [
  {
    path: '',
    component: Tab28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab28PageRoutingModule {}
