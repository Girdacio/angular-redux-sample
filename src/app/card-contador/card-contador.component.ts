import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-contador',
  templateUrl: './card-contador.component.html',
  styleUrls: ['./card-contador.component.scss']
})
export class CardContadorComponent implements OnInit {

  contador = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public incrementar() {
    this.contador++;
  }

}
