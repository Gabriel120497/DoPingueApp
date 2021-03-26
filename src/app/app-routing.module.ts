import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Miscelaneos',
    pathMatch: 'full'
  },
  {
    path: 'folder/Kits',
    loadChildren: () => import('./kits/kits.module').then(m => m.KitsPageModule)
  },
  {
    path: 'folder/Miscelaneos',
    loadChildren: () => import('./miscelaneos/miscelaneos.module').then(m => m.MiscelaneosPageModule)
  },
  {
    path: 'folder/Armar-Kit',
    loadChildren: () => import('./armar-kit/armar-kit.module').then(m => m.ArmarKitPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
