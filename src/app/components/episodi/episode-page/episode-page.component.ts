import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { EpisodeResult } from 'src/app/model/episode-model';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';


@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.scss']
})
export class EpisodePageComponent {
  episodes: EpisodeResult[] = []
  episodeList: EpisodeResult[] = []

  constructor(private dataService: DataServiceService) {
    this.loadEpisodes()
  }


  loadEpisodes() {
    this.dataService.getEpisode().subscribe({
      next: episode => this.episodes = episode,
      error: err => console.log('Errore episode', err)
    })
  }
  
}
