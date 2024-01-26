import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../model/Pokemon";
import {Type} from "../../model/Type";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[]

  constructor() {
    this.pokemons = []
  }

  ngOnInit(): void {
    const bulbizarre = new Pokemon("001", "Bulbizarre", [Type.PLANTE, Type.POISON], "70 centimètres", "6,9", "graine")
    const herbizarre = new Pokemon("002", "Herbizarre", [Type.PLANTE, Type.POISON], "1 mètre", "13", "graine")
    const florizarre = new Pokemon("003", "Florizarre", [Type.PLANTE, Type.POISON], "2 mètres", "100", "graine")
    const salamèche = new Pokemon("004", "Salamèche", [Type.FEU], "60 centimètres", "8.5", "lezard")
    const reptincel = new Pokemon("005", "Reptincel", [Type.FEU], "1.1 mètre", "19", "flamme")
    const dracaufeu = new Pokemon("006", "Dracaufeu", [Type.VOL, Type.FEU], "1.7 mètres", "90.5", "flamme")

    this.pokemons.push(bulbizarre)
    this.pokemons.push(herbizarre)
    this.pokemons.push(florizarre)
    this.pokemons.push(salamèche)
    this.pokemons.push(reptincel)
    this.pokemons.push(dracaufeu)

    console.log(this.pokemons)

  }

}
