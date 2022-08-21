import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private nav: NavController) {}

  goToForm(type: string) {
    this.nav.navigateForward(`/form/${type}`);
  }
}
