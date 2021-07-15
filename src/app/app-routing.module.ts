import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavesComponent } from './naves/naves.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetasComponent } from './planetas/planetas.component';

const routes: Routes = [
  { path: 'personajes', component: PersonajesComponent },
  { path: 'naves', component: NavesComponent },
  { path: 'planetas', component: PlanetasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
