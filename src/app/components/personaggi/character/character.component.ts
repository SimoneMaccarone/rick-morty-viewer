import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CharacterResult } from 'src/app/model/character-model';
import { EpisodeResult } from 'src/app/model/episode-model';
import { LocationResult } from 'src/app/model/location-model';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character?: CharacterResult;
  @Input() location?: LocationResult;
  @Input() episode?: EpisodeResult;


  searchForm: FormGroup;
  characterList: any;

  constructor(private dataService: DataServiceService, private http: HttpClient, private formBuilder: FormBuilder,) {

    this.searchForm = this.formBuilder.group({
      search: ['']
    });

  }

  getStatusStyle(status: string): any {
    let style = {};

    if (status === 'Alive') {
      style = { color: 'lime' };
    } else if (status === 'Dead') {
      style = { color: 'crimson' };
    } else if (status === 'unknown') {
      style = { color: 'yellow' };
    }

    return style;
  }

}

