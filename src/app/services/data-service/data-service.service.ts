import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CharacterResult } from 'src/app/model/character-model';
import { BaseData } from 'src/app/model/base-data';
import { LocationResult } from 'src/app/model/location-model';
import { EpisodeResult } from 'src/app/model/episode-model';


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
  }

  getRickMortyAPI(): Observable<BaseData> {
    return this.http.get<any>(this.RICK_MORTY_URL);
  }

  // CHARACTER
public index: number= 1
  getCharacter(): Observable<CharacterResult[]> {
    return this.http.get<any>(this.CHARACTER_URL + '?page=' + 1).pipe(
      switchMap(character => {
        const results = character.results;
        const getArray = [];
        getArray.push(results);
        return getArray
      })
    )
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




  
}
