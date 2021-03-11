import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetcokePageRoutingModule } from './petcoke-routing.module';

import { PetcokePage } from './petcoke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetcokePageRoutingModule
  ],
  declarations: [PetcokePage]
})
export class PetcokePageModule {}
