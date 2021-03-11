import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dieseld6Page } from './dieseld6.page';

const routes: Routes = [
  {
    path: '',
    component: Dieseld6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dieseld6PageRoutingModule {}
