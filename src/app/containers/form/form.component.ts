import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

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
  type: string;
  headingText = 'Defina as condições do seu espaço';
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

  constructor(private route: ActivatedRoute, private nav: NavController) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.type = routeParams.get('type');

    this.headingText =
      this.type === 'productor'
        ? 'Defina as condições armazenamento ideal para o seu grão'
        : 'Defina as condições do seu espaço';

    console.log(localStorage.getItem('formValues'));

    if (localStorage.getItem('formValues') !== null) {
      console.log(localStorage.getItem('formValues'));
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
}
