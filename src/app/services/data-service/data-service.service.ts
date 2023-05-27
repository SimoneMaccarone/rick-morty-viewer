import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap,forkJoin } from 'rxjs';
import { CharacterModel } from 'src/app/model/character-model';
import { BaseData } from 'src/app/model/base-data';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  readonly RICK_MORTY_URL = 'https://rickandmortyapi.com/api'
  readonly CHARACTER_URL = 'https://rickandmortyapi.com/api/character'
  readonly LOCATION_URL = 'https://rickandmortyapi.com/api/location'
  readonly EPISODE_URL = 'https://rickandmortyapi.com/api/episode'

  constructor(private http: HttpClient) {

    this.getRickMortyAPI();
    this.getCharacter();
    this.getNameCharacter();
    // this.getLocation();
    // this.getEpisode();


  }

  getRickMortyAPI(): Observable<any> {
    return this.http.get<any>(this.RICK_MORTY_URL);
  }

  // CHARACTER
  getCharacter(): Observable<any> {
    return this.http.get<any>(this.CHARACTER_URL);
  }

  getNameCharacter() {
    return this.http.get<CharacterModel>(this.CHARACTER_URL).pipe(
      switchMap((charter) => {
        for (let i = 0; i < 21; i++) {
          const results= charter.results;
          const numberCharter = results[i];
          const nameCharter = numberCharter.name;
          return this.http.get(nameCharter)
        }
      })
    )
  }






}
