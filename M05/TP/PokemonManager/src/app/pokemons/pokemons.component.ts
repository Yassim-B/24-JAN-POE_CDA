import {Component, Inject, OnInit} from '@angular/core';
import {Pokemon} from "../../model/Pokemon";
import {Type} from "../../model/Type";
import {AffichagePokemonService} from "../services/affichage-pokemon.service";
import {ApiService} from "../services/api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  nbPokemon: number
  pokemons: Pokemon[]
  generations: Observable<any>
  pokemonsApi: Observable<any>
  pokemons41Api: Observable<any>


  constructor(@Inject(AffichagePokemonService) private affichagePokemonService: AffichagePokemonService,
              @Inject(ApiService) private apiService: ApiService
  ) {
    this.nbPokemon = 0
    this.pokemons = []
    this.generations = this.apiService.getGenerations()
    this.pokemonsApi = this.apiService.getPokemons()
    this.pokemons41Api = this.apiService.getPokemon41()
  }

  ngOnInit(): void {
    this.nbPokemon = this.affichagePokemonService.countPokemons()
    this.pokemons = this.affichagePokemonService.getPokemons()

  }


}
