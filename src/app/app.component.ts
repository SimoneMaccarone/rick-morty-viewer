import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service/data-service.service';
import { HttpClient } from '@angular/common/http'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { CharacterResult } from './model/character-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // searchForm: FormGroup = new FormGroup({
  //   search: new FormControl('')
  // })
  // public characterList: CharacterResult[]=[]

  constructor(private dataService: DataServiceService) {
    // this.searchForm.get('search')?.valueChanges.pipe(
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    //   switchMap((data) => this.dataService.getCharactersName(data))
    // ).subscribe(
    //   (data) => {
    //     this.characterList = data!.results
    //   }
    // )

    dataService.getRickMortyAPI().subscribe({
      next: rickmortyapi => console.log('Rick & Morty API:', rickmortyapi),
      error: err => console.log(err)
    })

    // EPISODE
    dataService.getEpisode().subscribe({
      next: episode => console.log('Episodi:', episode),
      error: err => console.log(err)
    })

  }

  title = 'rick-morty-viewer';
}
