import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voiture} from "../models/voiture";
import {RentalForm} from "../models/rental-form";
import {VoitureForm} from "../models/voiture-form";
import {FilterComponent} from "../components/filter/filter.component";
import {FilterForm} from "../models/filter-form";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  private _apiUrl = "http://localhost:8080/voiture";

  constructor(private _client: HttpClient, private sServ: SessionService) { }

  getAll() : Observable<Voiture[]> {
    return this._client.get(this._apiUrl) as Observable<Voiture[]>;
  }

  getAllColors() : Observable<string[]> {
    return this._client.get(this._apiUrl+"/colors") as Observable<string[]>;
  }

  getAllTypes() : Observable<string[]> {
    return this._client.get(this._apiUrl+"/types") as Observable<string[]>;
  }

  getAllFuels() : Observable<string[]> {
    return this._client.get(this._apiUrl+"/fuels") as Observable<string[]>;
  }

  getAllReady() : Observable<Voiture[]> {
    return this._client.get(this._apiUrl+"/ready") as Observable<Voiture[]>;
  }

  getFiltered(filter: FilterForm) : Observable<Voiture[]> {
    return this._client.post(this._apiUrl+"/filter", filter) as Observable<Voiture[]>;
  }

  public postCar(toPost: VoitureForm): Observable<VoitureForm> {
    const headers = new HttpHeaders({
      Authorization: this.sServ.getApiKey()
    });
    return this._client.post(this._apiUrl, toPost, {headers}) as Observable<VoitureForm>;
  }

  public updateStatus(toUpdate: VoitureForm): Observable<VoitureForm> {
    const headers = new HttpHeaders({
      Authorization: this.sServ.getApiKey()
    });
    return this._client.patch(this._apiUrl+"/changestatus", toUpdate, {headers}) as Observable<VoitureForm>;
  }
}
