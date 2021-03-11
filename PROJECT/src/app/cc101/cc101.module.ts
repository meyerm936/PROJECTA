import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CC101PageRoutingModule } from './cc101-routing.module';

import { CC101Page } from './cc101.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CC101PageRoutingModule
  ],
  declarations: [CC101Page]
})
export class CC101PageModule {}
