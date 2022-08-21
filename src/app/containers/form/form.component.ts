import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as dataCidade from './data/dataCidades.json';
import * as dataEstado from './data/dataEstados.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    grainType: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    storageType: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    grainWeight: new FormControl('', Validators.required),
  });
  currentStep = 0;
  dataCidade = dataCidade;
  dataEstado = dataEstado;
  type: string;
  headingText = 'Defina as condições armazenamento ideal para o seu grão';
  grainTypes = [
    {
      id: 1,
      text: 'Soja',
    },
    {
      id: 2,
      text: 'Milho',
    },
    {
      id: 4,
      text: 'Ambos',
    },
  ];
  storageTypes = [
    {
      id: 1,
      text: 'Silo',
    },
    {
      id: 2,
      text: 'Armazém',
    },
    {
      id: 3,
      text: 'Silo bag',
    },
    {
      id: 4,
      text: 'Indiferente',
    },
  ];

  formQuestions = {
    grainType: 'Qual grão você precisa estocar?',
    period: 'Qual período de armazenamento?',
    storageType: 'Que tipo de armazenamento você precisa?',
    location: 'Qual região é mais estratégica para alocar o seu produto?',
    grainWeight: 'Quantos quilos de grãos você precisa armazenar?',
  };

  constructor(private route: ActivatedRoute, private nav: NavController) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.type = routeParams.get('type');

    if (this.type !== 'productor') {
      this.headingText = 'Defina as condições do seu espaço';

      this.formQuestions = {
        grainType:
          'Qual grão é possível estocar no armazenamento que você pretende alugar?',
        period: 'Qual período em que seu armazenamento está disponível?',
        storageType: 'Qual o tipo do seu armazenamento?',
        location: 'Qual a cidade em que seu armazenamento está localizado?',
        grainWeight: 'Qual a capacidade do seu armazenamento? (em KG)',
      };
    }

    if (localStorage.getItem('formValues') !== null) {
      const storagedFormValues = JSON.parse(localStorage.getItem('formValues'));
      this.form.setValue(storagedFormValues);
      this.currentStep = 4;
    }
  }

  nextStep(): void {
    this.currentStep = this.currentStep + 1;
    console.log(this.form);
  }

  previousStep(): void {
    this.currentStep = this.currentStep - 1;
  }

  isLastStep(): boolean {
    return this.currentStep === 4;
  }

  goToResults(): void {
    localStorage.setItem('formValues', JSON.stringify(this.form.value));
    this.nav.navigateForward(`/result/${this.type}`);
  }

  goToHome(): void {
    localStorage.clear();
    this.nav.navigateForward('');
  }
}
