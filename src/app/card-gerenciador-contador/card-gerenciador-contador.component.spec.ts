import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGerenciadorContadorComponent } from './card-gerenciador-contador.component';

describe('CardGerenciadorContadorComponent', () => {
  let component: CardGerenciadorContadorComponent;
  let fixture: ComponentFixture<CardGerenciadorContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGerenciadorContadorComponent ]
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
