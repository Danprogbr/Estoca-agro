import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGrainStorage } from 'src/app/models/grain-storage.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  items: IGrainStorage[] = [
    { pricePerMonth: 599, storageType: 'Silo', city: 'Sinop', country: 'MT' },
    { pricePerMonth: 599, storageType: 'Silo', city: 'Sinop', country: 'MT' },
  ];
  type: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.type = routeParams.get('type');
  }
}
