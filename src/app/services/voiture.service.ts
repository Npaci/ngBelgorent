import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voiture} from "../models/voiture";
import {RentalForm} from "../models/rental-form";
import {VoitureForm} from "../models/voiture-form";
import {FilterComponent} from "../components/filter/filter.component";
import {FilterForm} from "../models/filter-form";
import {SessionService} from "./session.service";
import {VINValidity} from "../models/VINValidity";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  private _apiUrl = "http://localhost:8080/voiture";

  constructor(private _client: HttpClient, private sServ: SessionService) { }

  generateVIN() {
    let result = '';
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 17; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("GENERATED VIN: "+result);
    return result;
  }

  // getValidVIN () {
  //   let valid = false;
  //   let vin = "";
  //
  //   while (!valid) {
  //     this.checkVIN(this.generateVIN()).subscribe({
  //       next: rep => {
  //         if (rep.valid){
  //           valid = true;
  //           vin = rep.VIN
  //         }
  //       },
  //       error: err => {
  //         console.log("INVALID VIN: "+ JSON.stringify(err))
  //       },
  //       complete: () => {
  //         if (vin != "")
  //           console.log("");
  //       }
  //     })
  //   }
  // }

  checkVIN(vin: string) : Observable<VINValidity> {
    return this._client.get(this._apiUrl+"/vinvalidity/"+vin) as Observable<VINValidity>;
  }

  getAll() : Observable<Voiture[]> {
    const headers = new HttpHeaders({
      Authorization: this.sServ.getApiKey()
    });
    return this._client.get(this._apiUrl, {headers}) as Observable<Voiture[]>;
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
    const headers = new HttpHeaders({
      Authorization: this.sServ.getApiKey()
    });
    return this._client.get(this._apiUrl+"/ready", {headers}) as Observable<Voiture[]>;
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

  delete(IdToDelete: number) : Observable<VoitureForm> {
    console.log("ON VA SUPPRIMER l'id => "+IdToDelete);
    const headers = new HttpHeaders({
      Authorization: this.sServ.getApiKey()
    });
    return this._client.delete(this._apiUrl+"/"+IdToDelete, {headers}) as Observable<VoitureForm>;
  }
}
