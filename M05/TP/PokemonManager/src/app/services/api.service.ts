import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'https://pokeapi.co/api/v2/generation/'

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/?offset=40'

  private urlpokemon41 = 'https://pokeapi.co/api/v2/pokemon/41/'

  constructor(@Inject(HttpClient) private http: HttpClient) {

  }

  public getGenerations(): Observable<string> {
    return this.http.get<any>(this.url)
  }

  public getPokemons(): Observable<string> {
    return this.http.get<any>(this.urlPokemon)
  }

  public getPokemon41(): Observable<string> {
    return this.http.get<any>(this.urlpokemon41)
  }
}
