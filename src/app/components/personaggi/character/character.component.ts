import { Component, Input } from '@angular/core';
import { CharacterResult } from 'src/app/model/character-model';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

@Input() character?: CharacterResult;

constructor() { }


}

