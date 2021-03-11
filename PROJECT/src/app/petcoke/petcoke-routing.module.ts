import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetcokePage } from './petcoke.page';

const routes: Routes = [
  {
    path: '',
    component: PetcokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetcokePageRoutingModule {}
