import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab19Page } from './tab19.page';

const routes: Routes = [
  {
    path: '',
    component: Tab19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab19PageRoutingModule {}
