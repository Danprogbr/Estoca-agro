import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() type: string;

  headerText = 'Encontramos isso na região escolhida por você';

  constructor() {}

  ngOnInit() {
    this.headerText =
      this.type === 'productor'
        ? 'Encontramos isso na região escolhida por você'
        : 'Esses são seus anúncios cadastrados';
  }
}
