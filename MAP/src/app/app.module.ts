import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './telas/login/login.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { TelaInicialComponent } from './telas/tela-inicial/tela-inicial.component';
import { CriacaoMapComponent } from './telas/criacao-map/criacao-map.component';
import { MapComponent } from './telas/map/map.component';
import { MetodologiasComponent } from './telas/metodologias/metodologias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TelaInicialComponent,
    CriacaoMapComponent,
    MapComponent,
    MetodologiasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
