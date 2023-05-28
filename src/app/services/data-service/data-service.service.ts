import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap,forkJoin } from 'rxjs';
import { CharacterModel } from 'src/app/model/character-model';
import { BaseData } from 'src/app/model/base-data';
import { LocationModel } from 'src/app/model/location-model';


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

  getRickMortyAPI(): Observable<any> {
    return this.http.get<any>(this.RICK_MORTY_URL);
  }

  // CHARACTER
  getCharacter(): Observable<CharacterModel[]> {
    return this.http.get<any>(this.CHARACTER_URL).pipe(
      switchMap(characters=>{
        const results= characters.results;
        const getArray = [];
        getArray.push(results);
        return getArray
      })
    )
  }

  // LOCATION
  getLocation():Observable<LocationModel[]>{
    return this.http.get<any>(this.LOCATION_URL).pipe(
      switchMap(locations=>{
        const results = locations.results;
        const getArray = [];
        getArray.push(results);
        return getArray;
      })
    )
  }

  //EPISODE
  getEpisode():Observable<[]>{

  }


}
