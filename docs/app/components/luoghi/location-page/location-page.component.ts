import { Component, OnInit } from '@angular/core';
import { LocationResult } from 'src/app/model/location-model';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';


@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent {

  location: LocationResult[] = [];
  page: number = 1;

  constructor(private dataService: DataServiceService) {

    this.loadLocation();
  }

  ngOnInit() {
    this.loadLocation();
  }

  // LOCATION
  loadLocation() {
    this.dataService.getLocation().subscribe({
      next: location => this.location = location,
      error: err => console.log('Errore', err)
    })
  }




}
