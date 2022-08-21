import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-result-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  @Input() type: string;

  constructor(private nav: NavController) {}

  goToForm(): void {
    this.nav.navigateForward(`/form/${this.type}`);
  }

  newForm(): void {
    localStorage.clear();
    this.nav.navigateBack('');
  }
}
