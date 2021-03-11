import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dieseld6PageRoutingModule } from './dieseld6-routing.module';

import { Dieseld6Page } from './dieseld6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dieseld6PageRoutingModule
  ],
  declarations: [Dieseld6Page]
})
export class Dieseld6PageModule {}
