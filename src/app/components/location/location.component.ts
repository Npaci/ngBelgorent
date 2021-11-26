import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../services/location.service";
import {Location} from "../../models/location";
import {Router} from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  listLocations: Location[] = [];
  constructor(private lServ: LocationService, private router: Router) { }

  ngOnInit(): void {
    this.lServ.getAll().subscribe(
      {
        next: locations => this.listLocations = locations,
        error: err => {this.router.navigate(["page500"])}
      }
    )
  }

}
