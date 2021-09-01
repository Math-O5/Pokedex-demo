import { Pokemon, Pokemons } from './pokemon';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];
  detailPokemons : Array<any> = [];
  constructor(private service: PokedexService) { 
    console.log('Aqui')
  }

  ngOnInit(): void {
    // Retrieve a list of pokemons
    this.service.list()
                .subscribe(pokemons => {this.pokemons = pokemons.results;
                    // Retrieve a list for the previous found pokemons
                    this.pokemons.forEach(pokemon => 
                                        this.service.getDetails(pokemon)
                                                    .subscribe(detailPokemon => {
                                                                this.detailPokemons.push(detailPokemon); }
                                                                )  
                    )
                });
  }

}
