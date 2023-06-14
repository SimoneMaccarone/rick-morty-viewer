import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { CharacterPageComponent } from './components/personaggi/character-page/character-page.component';
import { LocationPageComponent } from './components/luoghi/location-page/location-page.component';
import { EpisodePageComponent } from './components/episodi/episode-page/episode-page.component';

const routes: Routes = [
  { path: 'character-page', component: CharacterPageComponent  },
  { path: 'location-page', component: LocationPageComponent },
  { path: 'episode-page', component: EpisodePageComponent },
  { path: '**', component: CharacterPageComponent },  // Wildcard route for a 404 page
  { path: '', component: CharacterPageComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule {


}
