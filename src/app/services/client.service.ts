import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Location} from "../models/location";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _apiUrl = "http://localhost:8080/client";

  constructor(private _client: HttpClient) { }

  getAll() : Observable<[Client]> {
    return this._client.get(this._apiUrl) as Observable<[Client]>;
  }
}
