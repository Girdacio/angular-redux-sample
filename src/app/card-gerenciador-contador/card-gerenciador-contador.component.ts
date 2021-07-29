import { Component, OnInit } from '@angular/core';
import { ContadorStoreService } from '../contador-store.service';

@Component({
  selector: 'card-gerenciador-contador',
  templateUrl: './card-gerenciador-contador.component.html',
  styleUrls: ['./card-gerenciador-contador.component.scss']
})
export class CardGerenciadorContadorComponent implements OnInit {

  contador = 0;

  constructor(private contadorStore: ContadorStoreService) {
    contadorStore.contador.subscribe(contadorValue => this.contador = contadorValue);
  }

  ngOnInit(): void {
  }

  public resetar() {
    this.contadorStore.resetar();
  }

}
