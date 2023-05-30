import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { CharacterPageComponent } from './components/personaggi/character-page/character-page.component';
import { LocationPageComponent } from './components/luoghi/location-page/location-page.component';

const routes: Routes = [
  { path: 'character-page', component: CharacterPageComponent  },
  { path: 'location-page', component: LocationPageComponent },
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
