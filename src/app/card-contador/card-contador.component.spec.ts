import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { CardContadorComponent } from './card-contador.component';

describe('CardContadorComponent', () => {
  const storeSpy = jasmine.createSpyObj('Store', ['select']);
  let component: CardContadorComponent;
  let fixture: ComponentFixture<CardContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContadorComponent ],
      providers: [{ provide: Store, useValue: storeSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
