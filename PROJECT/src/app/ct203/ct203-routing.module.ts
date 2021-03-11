import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CT203Page } from './ct203.page';

const routes: Routes = [
  {
    path: '',
    component: CT203Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CT203PageRoutingModule {}
