import { PokedexService } from './../pokedex.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-pokedex-detalhe',
  templateUrl: './pokedex-detalhe.component.html',
  styleUrls: ['./pokedex-detalhe.component.css',  '../../type-style.css']
})
export class PokedexDetalheComponent implements OnInit {

  // id: string = '';
  // inscricao : Subscription;
  pokemon: any = [];
  icon_type : string = ''

  constructor(private route: ActivatedRoute, private servicePokedex : PokedexService) {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //     this.id = params['id'];
    // });
    this.pokemon = history.state.data;
    this.icon_type = '../../../assets/icons_type/' + this.pokemon.types[0]['type'].name + '.svg';
  }
  
  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params: any) => {
      //     this.id = params['id'];
      //     console.log(this.id);
      //     console.log(this.servicePokedex.getById(this.id))
      // });
  }

  ngOnDestroy() {
    // this.inscricao.unsubscribe();
  }

}
