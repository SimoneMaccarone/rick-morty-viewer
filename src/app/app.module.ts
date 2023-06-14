import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/personaggi/character/character.component';
import { CharacterPageComponent } from './components/personaggi/character-page/character-page.component';
import { LocationPageComponent } from './components/luoghi/location-page/location-page.component';
import { LocationComponent } from './components/luoghi/location/location.component';
import { EpisodePageComponent } from './components/episodi/episode-page/episode-page.component';
import { EpisodeComponent } from './components/episodi/episode/episode.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 


import { CarouselModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';



@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterPageComponent,
    LocationPageComponent,
    LocationComponent,
    EpisodePageComponent,
    EpisodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule,
    IconModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
