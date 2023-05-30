import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { CharacterResult } from 'src/app/model/character-model';
import { BaseData } from 'src/app/model/base-data';
import { LocationModel } from 'src/app/model/location-model';
import { EpisodeModel } from 'src/app/model/episode-model';


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
    this.getLocation();
    this.getEpisode();
    // this.getCharacterName();

  }

  getRickMortyAPI(): Observable<BaseData> {
    return this.http.get<any>(this.RICK_MORTY_URL);
  }

  // CHARACTER
  getCharacter(): Observable<CharacterResult[]> {
    return this.http.get<any>(this.CHARACTER_URL).pipe(
      switchMap(character => {
        const results = character.results;
        const getArray = [];
        getArray.push(results);
        return getArray
      })
    )
  }




  // LOCATION
  getLocation(): Observable<LocationModel[]> {
    return this.http.get<any>(this.LOCATION_URL).pipe(
      switchMap(locations => {
        const results = locations.results;
        const getArray = [];
        getArray.push(results);
        return getArray;
      })
    )
  }

  //EPISODE
  getEpisode(): Observable<EpisodeModel[]> {
    return this.http.get<any>(this.EPISODE_URL).pipe(
      switchMap(episode => {
        const results = episode.results;

        const getArray = []
        getArray.push(results);
        return getArray;
      })
    )
  }


  // // CHARACTER NAME
  // getCharacterName(): Observable<CharacterResult[]> {
  //   return this.http.get<any>(this.CHARACTER_URL).pipe(
  //     switchMap((characters) => {
  //       const getArray = [];
  //       for (let i = 0; i < 20; i++) {
  //         const results = characters.results;
  //         const index = results[i];
  //         const name = index.name;
  //         getArray.push(name);
  //       }
  //       const superArray = []
  //       superArray.push(getArray)
  //       return superArray
  //     })
  //   )
  // }
}
