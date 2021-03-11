import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dieseld2PageRoutingModule } from './dieseld2-routing.module';

import { Dieseld2Page } from './dieseld2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dieseld2PageRoutingModule
  ],
  declarations: [Dieseld2Page]
})
export class Dieseld2PageModule {}
