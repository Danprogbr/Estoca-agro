import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './componentes/forms/form1/form1.component';
import { Form2Component } from './componentes/forms/form2/form2.component';
import { Form3Component } from './componentes/forms/form3/form3.component';
import { Form4Component } from './componentes/forms/form4/form4.component';
import { StepComponent } from './componentes/step/step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './containers/form/form.component';
import { ResultComponent } from './containers/result/result.component';
import { ListComponent } from './components/result/list/list.component';
import { HeaderComponent } from './components/result/header/header.component';
import { ActionsComponent } from './components/result/actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    StepComponent,
    FormComponent,
    ResultComponent,
    HeaderComponent,
    ListComponent,
    ActionsComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
