import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.scss'],
})
export class Form5Component implements OnInit {

  form: FormGroup;
  tipoGrain = [
    {
      id: 1,
      text: 'Soja'
    },
    {
      id: 1,
      text: 'Milho'
    },
    {
      id: 1,
      text: 'Ambos'
    },
  ];
  loading: boolean;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      theAmount: new FormControl('', Validators.compose([Validators.required])),
    });
  };

  async sendTypeGrain() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 800,
      cssClass: 'custom-loading',
    });
    loading.present();
    setTimeout(() => {
      this.navCtrl.navigateForward('form5');
    }, 1000);
  }

  navigateBack() {
    this.navCtrl.navigateBack('form4');
  }
}
