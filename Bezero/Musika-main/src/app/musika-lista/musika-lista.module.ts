import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusikaListaPageRoutingModule } from './musika-lista-routing.module';

import { MusikaListaPage } from './musika-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusikaListaPageRoutingModule
  ],
  declarations: [MusikaListaPage]
})
export class MusikaListaPageModule {}
