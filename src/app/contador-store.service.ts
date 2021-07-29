import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorStoreService {

  private _contador: BehaviorSubject<number> = new BehaviorSubject(0);
  public readonly contador: Observable<number> = this._contador.asObservable();

  constructor() { }

  public incrementar() {
    this._contador.next(this._contador.getValue() + 1);
  }

  public resetar() {
    this._contador.next(0);
  }
}
