import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseoilsPageRoutingModule } from './baseoils-routing.module';

import { BaseoilsPage } from './baseoils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseoilsPageRoutingModule
  ],
  declarations: [BaseoilsPage]
})
export class BaseoilsPageModule {}
