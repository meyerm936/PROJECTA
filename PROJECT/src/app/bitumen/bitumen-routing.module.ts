import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitumenPage } from './bitumen.page';

const routes: Routes = [
  {
    path: '',
    component: BitumenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitumenPageRoutingModule {}
