import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jp54PageRoutingModule } from './jp54-routing.module';

import { Jp54Page } from './jp54.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jp54PageRoutingModule
  ],
  declarations: [Jp54Page]
})
export class Jp54PageModule {}
