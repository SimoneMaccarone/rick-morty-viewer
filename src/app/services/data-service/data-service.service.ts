import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  readonly RICK_MORTY_URL = 'https://rickandmortyapi.com/api'
  readonly CHARACTER_URL = 'https://rickandmortyapi.com/api/character'
  readonly LOCATION_URL = 'https://rickandmortyapi.com/api/location'
  readonly EPISODE_URL = 'https://rickandmortyapi.com/api/episode'

  constructor(private http:HttpClient) {

    this.getRickMortyAPI();
    this.getCharacter();
    this.getNameCharacter();
    // this.getLocation();
    // this.getEpisode();


  }

  getRickMortyAPI():Observable<any>{
  return this.http.get<any>(this.RICK_MORTY_URL);
  }

    // CHARACTER
  getCharacter():Observable<any>{
    return this.http.get<any>(this.CHARACTER_URL);
  }

  getNameCharacter():Observable<any>{
    return this.http.get<any>(this.CHARACTER_URL).pipe(
      switchMap((name)=>{
        const nomeCharacter = name.nome
        return this.http.get(nomeCharacter)}))
  }






}
