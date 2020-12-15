import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab22Page } from './tab22.page';

const routes: Routes = [
  {
    path: '',
    component: Tab22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab22PageRoutingModule {}
