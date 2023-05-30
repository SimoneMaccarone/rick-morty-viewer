import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/personaggi/character/character.component';
import { CharacterPageComponent } from './components/personaggi/character-page/character-page.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CarouselModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { LocationPageComponent } from './components/luoghi/location-page/location-page.component';
import { LocationComponent } from './components/luoghi/location/location.component';
// import { IconSetService } from '@coreui/icons-angular';



@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterPageComponent,
    LocationPageComponent,
    LocationComponent,
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
    // IconSetService,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
