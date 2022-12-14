import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormComponent } from './containers/form/form.component';
import { ResultComponent } from './containers/result/result.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./componentes/home/tab1.module').then((m) => m.Tab1PageModule),
  },
  {
    path: 'form/:type',
    component: FormComponent,
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
