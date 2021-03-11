import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UreaPage } from './urea.page';

const routes: Routes = [
  {
    path: '',
    component: UreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UreaPageRoutingModule {}
