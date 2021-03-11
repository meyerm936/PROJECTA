import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasolinePage } from './gasoline.page';

const routes: Routes = [
  {
    path: '',
    component: GasolinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasolinePageRoutingModule {}
