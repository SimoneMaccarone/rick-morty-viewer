import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { CharacterResult } from 'src/app/model/character-model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, forkJoin, debounceTime, distinctUntilChanged } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  characters: CharacterResult[] = [];


  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  constructor(public dataService: DataServiceService, private http: HttpClient, private formBuilder: FormBuilder) {
    this.loadCharacters();

    this.searchForm = this.formBuilder.group({
      search: ['']
    });

    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((data) => this.dataService.getCharactersName(data))
    ).subscribe(
      (data) => {
        this.characters = data!.results
      }
    )
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

}


