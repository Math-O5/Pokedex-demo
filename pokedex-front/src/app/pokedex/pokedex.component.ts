import { Pokemon, Pokemons } from './pokemon';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss', '../type-style.css']
})
export class PokedexComponent implements OnInit {

  offset : number = 0;
  actualPAge : number = 0;
  private readonly limit = 5
  pokemons: Pokemon[] = [];
  detailPokemons : Array<any> = [];

  constructor(private servicePokedex: PokedexService) {   }

  ngOnInit(): void {
    this.updateListPokemon();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateListPokemon();
  }
  
  onClickNextPage() {
    this.offset     += this.limit;
    this.actualPAge += 1;
    this.detailPokemons = []
    this.updateListPokemon();
  }

  onClickBackPage() {
    if(this.offset >= this.limit) {
        this.offset     -= this.limit;
        this.actualPAge -= 1;
        this.detailPokemons = []
        this.updateListPokemon();
    }
  }

  updateListPokemon() {
    // Retrieve a list of pokemons
    this.servicePokedex.list(this.offset, this.limit)
    .subscribe(pokemons => {this.pokemons = pokemons.results;
        // Retrieve a list for the previous found pokemons
        this.pokemons.forEach(pokemon => 
                            this.servicePokedex.getDetails(pokemon)
                                        .subscribe(detailPokemon => {
                                                    this.detailPokemons.push(detailPokemon);
                                                    console.log(detailPokemon) 
                                                  })  
        )
    });
  }

}
