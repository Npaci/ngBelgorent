import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client";
import {ClientForm} from "../models/client-form";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _apiUrl = "http://localhost:8080/client";

  constructor(private _client: HttpClient, private sServ: SessionService) { }

  getAll() : Observable<[Client]> {
    const headers = new HttpHeaders({
      Authorization: this.sServ.getApiKey()
    });
    return this._client.get(this._apiUrl, {headers}) as Observable<[Client]>;
  }

  public postUser(toPost: ClientForm): Observable<ClientForm> {
    return this._client.post(this._apiUrl, toPost) as Observable<ClientForm>;
  }
}
