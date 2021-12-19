import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VoitureComponent} from "./components/voiture/voiture.component";
import {LocationComponent} from "./components/location/location.component";
import {Page404Component} from "./components/page404/page404.component";
import {Page500Component} from "./components/page500/page500.component";
import {AppComponent} from "./app.component";
import {ClientComponent} from "./components/client/client.component";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {RentalStepsComponent} from "./components/rentalSteps/rentalSteps.component";
import {AddNewcarComponent} from "./components/add-newcar/add-newcar.component";
import {FilterComponent} from "./components/filter/filter.component";
import {LoginComponent} from "./components/login/login.component";
import {LoggedGuard} from "./guards/logged.guard";
import {SignupComponent} from "./components/signup/signup.component";
import {ModalComponent} from "./components/modal/modal.component";

const routes: Routes = [
  {path: "", redirectTo: "accueil", pathMatch: "full"},
  {path: "accueil", component: AccueilComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "voiture", component: VoitureComponent, canActivate: [LoggedGuard]},
  {path: "filter", component: FilterComponent},
  {path: "location", component: LocationComponent, canActivate: [LoggedGuard]},
  {path: "rentalSteps", component: RentalStepsComponent, canActivate: [LoggedGuard]},
  {path: "addnewcar", component: AddNewcarComponent, canActivate: [LoggedGuard]},
  {path: "modal", component: ModalComponent},
  {path: "client", component: ClientComponent, canActivate: [LoggedGuard]},
  {path: "page500", component: Page500Component},
  {path: "404", component: Page404Component},
  {path: "**", redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
