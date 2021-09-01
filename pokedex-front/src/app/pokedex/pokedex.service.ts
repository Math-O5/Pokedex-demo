import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Pokemons, Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pagina: string  = ''
  private readonly API = `${environment.API}`

  constructor(private http: HttpClient) { }

  list(offset: number, limit: number) {
    this.pagina = this.API + `?limit=${limit}&offset=${offset}`
    return this.http.get<Pokemons>(this.pagina)                     
  }

  getDetails(pokemon : Pokemon) {
    return this.http.get<Array<any>>(pokemon.url)
  }
}
