import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const url = 'https://raw.githubusercontent.com/cheeaun/repokemon/master/data/pokemon-list.json';

export interface Pokemon {
  ThumbnailAltText: string;
  ThumbnailImage: string;
  abilities: string[];
  collectibles_slug: string,
  detailPageURL: string;
  featured:  string;
  height: number;
  id: number;
  name:  string;
  number: string;
  slug:  string;
  type: string[];
  weakness: string[];
  weight: number;
}
@Injectable()
export class DataService {
constructor(private http: HttpClient) {}

  fetchPokemons() {
    return this.http.get(url)
      .pipe(
        delay(1000),
        map((response: Response) => response.json())
      );
  }
}