import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CC101Page } from './cc101.page';

const routes: Routes = [
  {
    path: '',
    component: CC101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CC101PageRoutingModule {}
