import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingController, NavController} from "@ionic/angular";
import * as dataCidade from './data/dataCidades.json';
import * as dataEstado from './data/dataEstados.json';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss'],
})
export class Form4Component implements OnInit {

  form: FormGroup;
  dataCidade = dataCidade;
  dataEstado = dataEstado;
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
      city: new FormControl('', Validators.compose([Validators.required])),
      state: new FormControl('', Validators.compose([Validators.required])),
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
    this.navCtrl.navigateBack('form3');
  }

}
