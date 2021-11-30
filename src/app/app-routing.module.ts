import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VoitureComponent} from "./components/voiture/voiture.component";
import {LocationComponent} from "./components/location/location.component";
import {Page404Component} from "./components/page404/page404.component";
import {Page500Component} from "./components/page500/page500.component";
import {AppComponent} from "./app.component";
import {ClientComponent} from "./components/client/client.component";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {StepslocationComponent} from "./components/stepslocation/stepslocation.component";

const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  // {path: " ", redirectTo: "accueil"},
  {path: "voiture", component: VoitureComponent},
  {path: "location", component: LocationComponent},
  {path: "stepslocation", component: StepslocationComponent},
  {path: "client", component: ClientComponent},
  {path: "page500", component: Page500Component},
  {path: "404", component: Page404Component},
  {path: "**", redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
