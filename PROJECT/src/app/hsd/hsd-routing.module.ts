import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HsdPage } from './hsd.page';

const routes: Routes = [
  {
    path: '',
    component: HsdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HsdPageRoutingModule {}
