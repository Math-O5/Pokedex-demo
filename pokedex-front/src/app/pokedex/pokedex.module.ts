import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexComponent } from './pokedex.component';
import { PokedexDetalheComponent } from './pokedex-detalhe/pokedex-detalhe.component';
import { PokedexRoutingModule } from './pokedex-routing.module';


@NgModule({
  declarations: [
    PokedexComponent,
    PokedexDetalheComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
  exports: [
    PokedexComponent
  ]
})
export class PokedexModule { }
