import { Component, OnInit } from '@angular/core';
import { ContadorStoreService } from '../contador-store.service';

@Component({
  selector: 'card-contador',
  templateUrl: './card-contador.component.html',
  styleUrls: ['./card-contador.component.scss']
})
export class CardContadorComponent implements OnInit {

  contador = 0;

  constructor(private contadorStore: ContadorStoreService) {
    contadorStore.contador.subscribe(contadorValue => this.contador = contadorValue);
  }

  ngOnInit(): void {
  }

  public incrementar() {
    this.contadorStore.incrementar();
  }

}
