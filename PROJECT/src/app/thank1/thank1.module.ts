import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Thank1PageRoutingModule } from './thank1-routing.module';

import { Thank1Page } from './thank1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Thank1PageRoutingModule
  ],
  declarations: [Thank1Page]
})
export class Thank1PageModule {}
