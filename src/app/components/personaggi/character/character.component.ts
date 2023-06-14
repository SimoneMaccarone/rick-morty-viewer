import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CharacterResult } from 'src/app/model/character-model';
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

  searchForm: FormGroup;
  characterList: any;

  constructor(private dataService: DataServiceService, private http: HttpClient, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });

  }
}

