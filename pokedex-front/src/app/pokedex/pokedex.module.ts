import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexComponent } from './pokedex.component';


@NgModule({
  declarations: [
    PokedexComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PokedexComponent
  ]
})
export class PokedexModule { }
