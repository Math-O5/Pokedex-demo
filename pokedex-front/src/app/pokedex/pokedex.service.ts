import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { PokemonDetail, Pokemons, Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly limit = 5
  offset: number  = 0
  pagina: string  = ''
  private readonly API = `${environment.API}`

  pokemons : Pokemon[] = []; 
  detailPokemons : PokemonDetail[] = [];

  constructor(private http: HttpClient) { }

  list() {
    this.offset += this.limit
    this.pagina = this.API + `?limit=${this.limit}&offset=${this.offset}`
    return this.http.get<Pokemons>(this.pagina)                     
  }

  getDetails(pokemon : Pokemon) {
    return this.http.get<Object>(pokemon.url)
  }
}
