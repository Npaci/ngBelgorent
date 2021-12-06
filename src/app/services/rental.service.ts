import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Rental} from "../models/rental";
import {Client} from "../models/client";
import {RentalForm} from "../models/rental-form";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private _apiUrl = "http://localhost:8080/location";

  constructor(private _client: HttpClient) { }

  getAll() : Observable<[Rental]> {
    return this._client.get(this._apiUrl) as Observable<[Rental]>;
  }

  public postRent(toPost: RentalForm): Observable<RentalForm> {
    return this._client.post(this._apiUrl, toPost) as Observable<RentalForm>;
  }
}
