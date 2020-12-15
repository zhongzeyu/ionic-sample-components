import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab24Page } from './tab24.page';

const routes: Routes = [
  {
    path: '',
    component: Tab24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab24PageRoutingModule {}
