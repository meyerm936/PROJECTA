import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dieselen590PageRoutingModule } from './dieselen590-routing.module';

import { Dieselen590Page } from './dieselen590.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dieselen590PageRoutingModule
  ],
  declarations: [Dieselen590Page]
})
export class Dieselen590PageModule {}
