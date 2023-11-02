import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './telas/login/login.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { TelaInicialComponent } from './telas/tela-inicial/tela-inicial.component';
import { MetodologiasComponent } from './telas/metodologias/metodologias.component';
import { CriacaoMapComponent } from './telas/criacao-map/criacao-map.component';
import { MapComponent } from './telas/map/map.component';
import { MapInicialComponent } from './telas/map-inicial/map-inicial.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'metodologias', component: MetodologiasComponent},
  { path: 'criacao-map', component: CriacaoMapComponent},
  { path: 'map', component: MapComponent},
  { path: 'map-inicial', component: MapInicialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
