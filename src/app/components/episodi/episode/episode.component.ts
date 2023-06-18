import { Component, Input } from '@angular/core';
import { EpisodeResult } from 'src/app/model/episode-model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {

  @Input() episode?: EpisodeResult
}
