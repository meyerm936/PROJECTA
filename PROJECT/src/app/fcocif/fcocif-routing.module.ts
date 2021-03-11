import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcocifPage } from './fcocif.page';

const routes: Routes = [
  {
    path: '',
    component: FcocifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcocifPageRoutingModule {}
