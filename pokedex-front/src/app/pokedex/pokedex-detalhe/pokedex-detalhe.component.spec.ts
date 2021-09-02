import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexDetalheComponent } from './pokedex-detalhe.component';

describe('PokedexDetalheComponent', () => {
  let component: PokedexDetalheComponent;
  let fixture: ComponentFixture<PokedexDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
