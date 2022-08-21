import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Form1Component} from './componentes/forms/form1/form1.component';
import {Form2Component} from './componentes/forms/form2/form2.component';
import {Form3Component} from './componentes/forms/form3/form3.component';
import {Form4Component} from './componentes/forms/form4/form4.component';
import {Form5Component} from './componentes/forms/form5/form5.component';
import {StepComponent} from "./componentes/step/step.component";

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    StepComponent,
  ],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
