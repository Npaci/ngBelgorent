import { Component, OnInit } from '@angular/core';
import {RentalService} from "../../services/rental.service";
import {Rental} from "../../models/rental";
import {Router} from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  listLocations: Rental[] = [];
  constructor(private lServ: RentalService, private router: Router) { }

  ngOnInit(): void {
    this.lServ.getAll().subscribe(
      {
        next: locations => this.listLocations = locations,
        error: err => {this.router.navigate(["page500"])}
      }
    )
  }

}
