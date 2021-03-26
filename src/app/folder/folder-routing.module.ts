import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitsPage } from '../kits/kits.page';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
