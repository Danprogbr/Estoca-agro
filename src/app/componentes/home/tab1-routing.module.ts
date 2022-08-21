import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {Form1Component} from '../forms/form1/form1.component';
import {Form2Component} from '../forms/form2/form2.component';
import {Form3Component} from '../forms/form3/form3.component';
import {Form4Component} from '../forms/form4/form4.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'form1',
    component: Form1Component
  },
  {
    path: 'form2',
    component: Form2Component
  },
  {
    path: 'form3',
    component: Form3Component
  },
  {
    path: 'form4',
    component: Form4Component
  },
  {
    path: 'form5',
    component: Form4Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
