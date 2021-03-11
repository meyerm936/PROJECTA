import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jp54Page } from './jp54.page';

const routes: Routes = [
  {
    path: '',
    component: Jp54Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jp54PageRoutingModule {}
