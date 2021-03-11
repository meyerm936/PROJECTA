import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetroleumPage } from './petroleum.page';

const routes: Routes = [
  {
    path: '',
    component: PetroleumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetroleumPageRoutingModule {}
