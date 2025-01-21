import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusikaListaPage } from './musika-lista.page';

const routes: Routes = [
  {
    path: '',
    component: MusikaListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusikaListaPageRoutingModule {}
