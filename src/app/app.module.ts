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
import { StepslocationComponent } from './components/stepslocation/stepslocation.component';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    Page404Component,
    LocationComponent,
    Page500Component,
    ClientComponent,
    AccueilComponent,
    StepslocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
