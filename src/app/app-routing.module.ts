import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {Tela2Component} from "./componentes/tela2/tela2.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./componentes/tela1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tela2',
    component: Tela2Component
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
