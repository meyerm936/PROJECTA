import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlacklistedPage } from './blacklisted.page';

const routes: Routes = [
  {
    path: '',
    component: BlacklistedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlacklistedPageRoutingModule {}
