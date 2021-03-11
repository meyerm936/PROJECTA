import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dieseld2Page } from './dieseld2.page';

const routes: Routes = [
  {
    path: '',
    component: Dieseld2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dieseld2PageRoutingModule {}
