import { Component, Input } from '@angular/core';
import { LocationResult } from 'src/app/model/location-model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

@Input() location?: LocationResult;

constructor() { }

}
