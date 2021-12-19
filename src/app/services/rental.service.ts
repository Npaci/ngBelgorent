import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Rental} from "../models/rental";
import {Client} from "../models/client";
import {RentalForm} from "../models/rental-form";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private _apiUrl = "http://localhost:8080/location";

  constructor(private _client: HttpClient, private sServ: SessionService) {
  }

  getAll() : Observable<[Rental]> {
    const headers = new HttpHeaders({
      Authorization: this.sServ.getApiKey()
    });
    return this._client.get(this._apiUrl, {headers}) as Observable<[Rental]>;
  }

  public postRent(toPost: RentalForm): Observable<RentalForm> {
    console.log(JSON.stringify(toPost))
    const headers = new HttpHeaders({
      Authorization: this.sServ.getApiKey()
    });
    return this._client.post(this._apiUrl, toPost, {headers}) as Observable<RentalForm>;
  }
}
