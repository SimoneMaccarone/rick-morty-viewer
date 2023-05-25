import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Character } from 'src/app/model/character-model';

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

  getNameCharacter(){
    return this.http.get<Character>(this.CHARACTER_URL).pipe(
      switchMap((character) => {
        const nameCharacter = character.name;
        return this.http.get(nameCharacter)
      })
    )
  }






}
