import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jeta1Page } from './jeta1.page';

const routes: Routes = [
  {
    path: '',
    component: Jeta1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jeta1PageRoutingModule {}
