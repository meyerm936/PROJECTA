import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Thank1Page } from './thank1.page';

const routes: Routes = [
  {
    path: '',
    component: Thank1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Thank1PageRoutingModule {}
