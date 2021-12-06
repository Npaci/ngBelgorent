import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voiture} from "../models/voiture";
import {RentalForm} from "../models/rental-form";
import {VoitureForm} from "../models/voiture-form";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  private _apiUrl = "http://localhost:8080/voiture";

  constructor(private _client: HttpClient) { }

  getAll() : Observable<Voiture[]> {
    return this._client.get(this._apiUrl) as Observable<Voiture[]>;
  }

  getAllReady() : Observable<Voiture[]> {
    return this._client.get(this._apiUrl+"/ready") as Observable<Voiture[]>;
  }

  public postCar(toPost: VoitureForm): Observable<VoitureForm> {
    console.log("Va etre envoyé: " + JSON.stringify(toPost))
    return this._client.post(this._apiUrl, toPost) as Observable<VoitureForm>;
  }
}
