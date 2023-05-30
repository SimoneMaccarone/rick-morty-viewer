import { Component, Input } from '@angular/core';
import { CharacterModel, CharacterResult } from 'src/app/model/character-model';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
// [x: string]: any;

@Input() character?: CharacterModel;
@Input() character2?: CharacterResult;


}