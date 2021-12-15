import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { Page404Component } from './components/page404/page404.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LocationComponent } from './components/location/location.component';
import { Page500Component } from './components/page500/page500.component';
import { ClientComponent } from './components/client/client.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RentalStepsComponent } from './components/rentalSteps/rentalSteps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import { AddNewcarComponent } from './components/add-newcar/add-newcar.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    Page404Component,
    LocationComponent,
    Page500Component,
    ClientComponent,
    AccueilComponent,
    RentalStepsComponent,
    AddNewcarComponent,
    FilterComponent,
    LoginComponent,
    SignupComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
