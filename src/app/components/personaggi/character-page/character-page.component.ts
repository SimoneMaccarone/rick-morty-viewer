import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { CharacterResult } from 'src/app/model/character-model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { coerceStringArray } from '@angular/cdk/coercion';
import { EpisodeResult } from 'src/app/model/episode-model';
import { DatePipe } from '@angular/common';
import { TitleStrategy } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
  // animations: [],
})


export class CharacterPageComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  });

  public characterList: CharacterResult[] = [];
  public characters: CharacterResult[] = [];
  public episodes: EpisodeResult[] = [];

  public currentPage=1;

  constructor(public dataService: DataServiceService, private http: HttpClient, private formBuilder: FormBuilder, private datePipe: DatePipe) {
    this.loadCharacters();

    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((data) => this.dataService.getCharactersName(data))
    ).subscribe(
      (data) => {
        this.characterList = data!.results
      })
  }

  ngOnInit() {
    this.loadCharacters();

  }


  // CHARACTER
  loadCharacters() {
    this.dataService.getCharacter().subscribe({
      next: characters => this.characters = characters,
      error: err => console.log('Errore', err)
    })
  }


  onSearch(): void {
    const searchTerm = this.searchForm.get('search')?.value;

    if (searchTerm) {
      this.dataService.getCharactersName(searchTerm).subscribe(
        (data) => {
          this.characterList = data!.results;  // Esegui altre azioni necessarie in base ai risultati della ricerca
        },
        (error) => {
          console.log('Errore nella ricerca:', error);
          this.characterList = [];
          // Pulisci l'array dei risultati
          // Esegui altre azioni necessarie in caso di errore nella ricerca
        }
      );
    } else {
      this.characterList = []; // Pulisci l'array dei risultati se la ricerca è vuota
    }
  }



// CARICA LA PROSSIMA PAGINA
  loadNextPage(): void {
    this.currentPage++;
    this.dataService.getCharactersByPage(this.currentPage).subscribe(
      (characters) => {
        this.characterList = characters;
      },
      (error) => {
        console.log('Errore nel caricamento della pagina:', error);
        this.currentPage--; // Ripristina il numero di pagina precedente in caso di errore
      }
    );
  }

  loadPrevPage(): void {
    this.currentPage--;
    this.dataService.getCharactersByPage(this.currentPage).subscribe(
      (characters) => {
        this.characterList = characters;
      },
      (error) => {
        console.log('Errore nel caricamento della pagina:', error);
        this.currentPage++; // Ripristina il numero di pagina precedente in caso di errore
      }
    );
  }


}



