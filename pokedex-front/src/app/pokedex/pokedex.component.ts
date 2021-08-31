import { Pokemon } from './pokemon';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private service: PokedexService) { 
    console.log('Aqui')
  }

  ngOnInit(): void {
    this.service.list()
                .subscribe(pokemons => this.pokemons = pokemons.results);
  }

}
