import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-gerenciador-contador',
  templateUrl: './card-gerenciador-contador.component.html',
  styleUrls: ['./card-gerenciador-contador.component.scss']
})
export class CardGerenciadorContadorComponent implements OnInit {

  contador = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public resetar() {
    this.contador = 0;
  }

}
