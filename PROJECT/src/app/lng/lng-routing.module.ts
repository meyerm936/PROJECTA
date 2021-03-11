import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LngPage } from './lng.page';

const routes: Routes = [
  {
    path: '',
    component: LngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LngPageRoutingModule {}
