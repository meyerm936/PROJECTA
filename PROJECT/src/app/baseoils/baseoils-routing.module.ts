import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseoilsPage } from './baseoils.page';

const routes: Routes = [
  {
    path: '',
    component: BaseoilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseoilsPageRoutingModule {}
