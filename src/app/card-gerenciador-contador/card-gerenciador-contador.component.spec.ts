import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { CardGerenciadorContadorComponent } from './card-gerenciador-contador.component';

describe('CardGerenciadorContadorComponent', () => {
  const storeSpy = jasmine.createSpyObj('Store', ['select']);
  let component: CardGerenciadorContadorComponent;
  let fixture: ComponentFixture<CardGerenciadorContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGerenciadorContadorComponent ],
      providers: [{ provide: Store, useValue: storeSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGerenciadorContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
