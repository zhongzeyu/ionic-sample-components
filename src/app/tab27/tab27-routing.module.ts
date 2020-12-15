import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab27Page } from './tab27.page';

const routes: Routes = [
  {
    path: '',
    component: Tab27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab27PageRoutingModule {}
