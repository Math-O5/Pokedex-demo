import { PokedexComponent } from './pokedex/pokedex.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokedexDetalheComponent } from './pokedex/pokedex-detalhe/pokedex-detalhe.component';

const routes: Routes = [
  { path: '', component: PokedexComponent },
  { path: 'pokemon/details', component: PokedexDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
