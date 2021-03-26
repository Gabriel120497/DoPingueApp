import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscelaneosPage } from './miscelaneos.page';

const routes: Routes = [
  {
    path: '',
    component: MiscelaneosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscelaneosPageRoutingModule {}
