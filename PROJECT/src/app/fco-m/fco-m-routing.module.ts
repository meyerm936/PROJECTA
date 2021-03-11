import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcoMPage } from './fco-m.page';

const routes: Routes = [
  {
    path: '',
    component: FcoMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcoMPageRoutingModule {}
