import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Pokemons } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly limit = 5
  offset: number = 0
  private readonly API = `${environment}?limit=15&offset=${this.offset}`

  constructor(private http: HttpClient) { }

  list() {
    this.offset += this.limit
    return this.http.get<Pokemons>(this.API);
  }
}
