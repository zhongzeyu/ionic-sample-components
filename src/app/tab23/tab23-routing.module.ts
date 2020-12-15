import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab23Page } from './tab23.page';

const routes: Routes = [
  {
    path: '',
    component: Tab23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab23PageRoutingModule {}
