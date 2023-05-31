import { Component, Input } from '@angular/core';
import { CharacterResult } from 'src/app/model/character-model';
import { LocationResult } from 'src/app/model/location-model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

@Input() character?: CharacterResult;
@Input() location?: LocationResult;


constructor() { }

}

