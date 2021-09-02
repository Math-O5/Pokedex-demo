import { PokedexComponent } from './pokedex.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexDetalheComponent } from './pokedex-detalhe/pokedex-detalhe.component';

const routes: Routes = [
  { path: '', component: PokedexComponent },
  { path: 'pokemon/:id', component: PokedexDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
