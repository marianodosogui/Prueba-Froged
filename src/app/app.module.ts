import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { ApiServiceService } from './service/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ColumnaIzquierdaComponent } from './columna-izquierda/columna-izquierda.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NavesComponent } from './naves/naves.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { UiRippleDirective } from './directive/ui-ripple.directive';


@NgModule({
  declarations: [
    AppComponent,
    UiButtonComponent,
    UiCardComponent,
    ColumnaIzquierdaComponent,
    PersonajesComponent,
    NavesComponent,
    PlanetasComponent,
    UiRippleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
