import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CT203PageRoutingModule } from './ct203-routing.module';

import { CT203Page } from './ct203.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CT203PageRoutingModule
  ],
  declarations: [CT203Page]
})
export class CT203PageModule {}
