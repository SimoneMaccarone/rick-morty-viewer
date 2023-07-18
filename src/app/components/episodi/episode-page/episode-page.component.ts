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
  public currentPage = 1;

  constructor(private dataService: DataServiceService) {
    this.loadEpisodes();
  }




  ngOnInit() {
    this.loadEpisodes();
  }

  loadEpisodes() {
    this.dataService.getEpisode().subscribe({
      next: episode => this.episodes = episode,
      error: err => console.log('Errore episode', err)
    })
  }


  // CARICA LA PROSSIMA PAGINA
  loadNextPage(): void {

    if (this.currentPage < 42) {
      this.currentPage++;
      this.dataService.getEpisodesByPage(this.currentPage).subscribe(
        (episodes) => {
          this.episodeList = episodes;
        },
        (error) => {
          console.log('Errore nel caricamento della pagina:', error);
          this.currentPage--; // Ripristina il numero di pagina precedente in caso di errore
        }
      );
    }

  }

  loadPrevPage(): void {

    if (this.currentPage > 1) {
      this.currentPage--;
      this.dataService.getEpisodesByPage(this.currentPage).subscribe(
        (episodes) => {
          this.episodeList = episodes;
        },
        (error) => {
          console.log('Errore nel caricamento della pagina:', error);
          this.currentPage++; // Ripristina il numero di pagina successiva in caso di errore
        }
      );
    }
  }
}
