import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab20Page } from './tab20.page';

const routes: Routes = [
  {
    path: '',
    component: Tab20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab20PageRoutingModule {}
