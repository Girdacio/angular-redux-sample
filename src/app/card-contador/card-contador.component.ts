import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementar } from '../contador/contador.actions';

@Component({
  selector: 'card-contador',
  templateUrl: './card-contador.component.html',
  styleUrls: ['./card-contador.component.scss']
})
export class CardContadorComponent implements OnInit {

  contador$: Observable<number>;

  constructor(private store: Store<{ contador: number }>) {
    this.contador$ = store.select('contador');
  }

  ngOnInit(): void {
  }

  public incrementar() {
    this.store.dispatch(incrementar());
  }

}
