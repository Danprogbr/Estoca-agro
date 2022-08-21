import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'form1.component.html',
  styleUrls: ['form1.component.scss']
})
export class Form1Component implements OnInit {
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
      typeGrain: new FormControl('', Validators.compose([Validators.required])),
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
      this.navCtrl.navigateForward('form2');
    }, 1000);
  }
}
