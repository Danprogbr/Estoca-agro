import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsComponent } from './components/result/actions/actions.component';
import { HeaderComponent } from './components/result/header/header.component';
import { ListComponent } from './components/result/list/list.component';
import { ResultComponent } from './containers/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ActionsComponent,
    HeaderComponent,
    ListComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
