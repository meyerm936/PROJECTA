import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mazut100Page } from './mazut100.page';

const routes: Routes = [
  {
    path: '',
    component: Mazut100Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mazut100PageRoutingModule {}
