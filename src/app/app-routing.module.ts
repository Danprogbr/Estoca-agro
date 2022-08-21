import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tela2Component } from './componentes/tela2/tela2.component';
import { ResultComponent } from './containers/result/result.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./componentes/tela1/tab1.module').then((m) => m.Tab1PageModule),
  },
  {
    path: 'tela2',
    component: Tela2Component,
  },
  {
    path: 'result/:type',
    component: ResultComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}