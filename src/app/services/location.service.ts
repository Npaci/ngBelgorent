import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Location} from "../models/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _apiUrl = "http://localhost:8080/location";

  constructor(private _client: HttpClient) { }

  getAll() : Observable<[Location]> {
    return this._client.get(this._apiUrl) as Observable<[Location]>;
  }
}
