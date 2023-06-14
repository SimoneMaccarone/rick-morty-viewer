import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { CharacterResult } from 'src/app/model/character-model';
import { BaseData } from 'src/app/model/base-data';
import { LocationModel, LocationResult } from 'src/app/model/location-model';
import { EpisodeModel, EpisodeResult } from 'src/app/model/episode-model';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  readonly RICK_MORTY_URL = 'https://rickandmortyapi.com/api'
  readonly CHARACTER_URL = 'https://rickandmortyapi.com/api/character'
  readonly LOCATION_URL = 'https://rickandmortyapi.com/api/location'
  readonly EPISODE_URL = 'https://rickandmortyapi.com/api/episode'

  index: number = 1;


  constructor(private http: HttpClient) {
    this.getRickMortyAPI();

    this.getCharacter(this.index);
    this.getLocation();
    this.getEpisode();
    this.getNextPage()
  }


  getRickMortyAPI(): Observable<BaseData> {
    return this.http.get<any>(this.RICK_MORTY_URL);
  }

  // CHARACTER
  getCharacter(index:number): Observable<CharacterResult[]> {
    return this.http.get<any>(this.CHARACTER_URL + '?page=' + index).pipe(
      switchMap(character => {
        const results = character.results;
        const getArray = [];
        getArray.push(results);
        return getArray
      })
    )
  }

  getNextPage() {
    console.log('sono nella getpage')
    this.index+1
  }




  // LOCATION
  getLocation(): Observable<LocationResult[]> {
    return this.http.get<any>(this.LOCATION_URL + '?page=' + 1).pipe(
      switchMap(locations => {
        const results = locations.results;
        const getArray = [];
        getArray.push(results);
        return getArray;
      })
    )
  }

  //EPISODE
  getEpisode(): Observable<EpisodeResult[]> {
    return this.http.get<any>(this.EPISODE_URL + '?page=' + 1).pipe(
      switchMap(episode => {
        const results = episode.results;

        const getArray = [];
        getArray.push(results);
        return getArray;
      })
    )
  }

  // // NEXT PAGE
  // getNextPage():any{
  //   this.index++
  // }

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
