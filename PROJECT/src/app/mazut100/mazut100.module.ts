import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mazut100PageRoutingModule } from './mazut100-routing.module';

import { Mazut100Page } from './mazut100.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mazut100PageRoutingModule
  ],
  declarations: [Mazut100Page]
})
export class Mazut100PageModule {}
