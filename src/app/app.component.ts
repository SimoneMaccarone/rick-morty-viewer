import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service/data-service.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
rickmortyapi: any;
character: any;
location: any;
episode: any;
results: any;

  constructor(private dataService: DataServiceService) {

    dataService.getRickMortyAPI().subscribe({
      next: rickmortyapi => console.log('Rick & Morty API:', rickmortyapi),
      error: err => console.log(err)
    })


    // CHARACTER
    dataService.getCharacter().subscribe({
      next: character => console.log('Personaggi:', character),
      error: err => console.log(err)
    })

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








  }

  title = 'rick-morty-viewer';
}
