import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dieselen590Page } from './dieselen590.page';

const routes: Routes = [
  {
    path: '',
    component: Dieselen590Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dieselen590PageRoutingModule {}
