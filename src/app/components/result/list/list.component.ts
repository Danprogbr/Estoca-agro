import { Component, Input, OnInit } from '@angular/core';
import { IGrainStorage } from 'src/app/models/grain-storage.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() items: IGrainStorage[];
  @Input() type: string;

  badgeText: string;

  constructor() {}

  ngOnInit() {
    this.badgeText =
      this.type === 'productor' ? 'Clique para ver mais' : 'Clique para editar';
  }
}
