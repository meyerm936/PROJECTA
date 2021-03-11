import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudeoilPage } from './crudeoil.page';

const routes: Routes = [
  {
    path: '',
    component: CrudeoilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudeoilPageRoutingModule {}
