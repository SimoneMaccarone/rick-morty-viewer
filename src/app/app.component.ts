import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service/data-service.service';
import { HttpClient } from '@angular/common/http'
import { CharacterModel } from 'src/app/model/character-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Input() character?: CharacterModel;


  constructor(private dataService: DataServiceService) {


    dataService.getRickMortyAPI().subscribe({
      next: rickmortyapi => console.log('Rick & Morty API:', rickmortyapi),
      error: err => console.log(err)
    })


    // // CHARACTER
    // dataService.getCharacter().subscribe({
    //   next: character => console.log('Personaggi:', character),
    //   error: err => console.log(err)
    // })
    

    // LOCATION
    dataService.getLocation().subscribe({
      next: location => console.log('Luoghi:', location),
      error: err => console.log(err)
    })

    // EPISODE
    dataService.getEpisode().subscribe({
      next: episode => console.log('Episodi:', episode),
      error: err => console.log(err)
    })

    // // CHARACTER NAME
    // dataService.getCharacterName().subscribe({
    //   next: characterName => console.log('Nome Personaggio', characterName),
    //   error: err=> console.log(err)
    // })






  }

  title = 'rick-morty-viewer';
}
