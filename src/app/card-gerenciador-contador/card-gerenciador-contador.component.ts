import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContadorStoreService } from '../contador-store.service';
import { resetar } from '../contador/contador.actions';

@Component({
  selector: 'card-gerenciador-contador',
  templateUrl: './card-gerenciador-contador.component.html',
  styleUrls: ['./card-gerenciador-contador.component.scss']
})
export class CardGerenciadorContadorComponent implements OnInit {

  contador$: Observable<number>;

  constructor(private store: Store<{ contador: number }>) {
    this.contador$ = store.select('contador');
  }

  ngOnInit(): void {
  }

  public resetar() {
    this.store.dispatch(resetar());
  }

}
