import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Pokemons, Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly limit = 5
  offset: number  = 0
  pagina: string  = ''
  private readonly API = `${environment.API}`

  constructor(private http: HttpClient) { }

  list() {
    this.pagina = this.API + `?limit=${this.limit}&offset=${this.offset}`
    this.offset += this.limit
    return this.http.get<Pokemons>(this.pagina)                     
  }

  getDetails(pokemon : Pokemon) {
    return this.http.get<Array<any>>(pokemon.url)
  }
}
