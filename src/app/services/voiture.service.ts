import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voiture} from "../models/voiture";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  private _apiUrl = "http://localhost:8080/voiture";
  private _apiUrlReady = "http://localhost:8080/voiture/ready";

  constructor(private _client: HttpClient) { }

  getAll() : Observable<Voiture[]> {
    return this._client.get(this._apiUrl) as Observable<Voiture[]>;
  }

  getAllReady() : Observable<Voiture[]> {
    return this._client.get(this._apiUrlReady) as Observable<Voiture[]>;
  }
}
