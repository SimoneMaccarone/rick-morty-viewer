import { Component } from '@angular/core';
import { EpisodeResult } from 'src/app/model/episode-model';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.scss']
})
export class EpisodePageComponent {
  episode: EpisodeResult[] = []
  episodeList: EpisodeResult[] = []

  constructor(private dataService: DataServiceService) {
    getEpisode()
  }

  getEpisode(){
    
  }



}
