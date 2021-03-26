import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmarKitPage } from './armar-kit.page';

const routes: Routes = [
  {
    path: '',
    component: ArmarKitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmarKitPageRoutingModule {}
