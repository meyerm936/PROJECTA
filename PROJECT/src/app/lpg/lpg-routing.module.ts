import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LpgPage } from './lpg.page';

const routes: Routes = [
  {
    path: '',
    component: LpgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LpgPageRoutingModule {}
