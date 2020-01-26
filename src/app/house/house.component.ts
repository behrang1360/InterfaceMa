import { Component, OnInit, Input } from "@angular/core";
import { House } from "./house.model";
import { Location } from "../model/location.model";
import { DirectionsService } from "../services/directionsService";
import { makeBindingParser } from "@angular/compiler";
import { Marker } from "../model/marker.model";
import { AtoB } from "../model/AtoB.model";
import { from } from 'rxjs';
import { Route } from '../model/route.model';

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.css"]
})
export class HouseComponent implements OnInit {
  @Input() house: House;

  constructor(private directionsService: DirectionsService) { }

  location: Location;

  atoB: AtoB;
  ngOnInit() {
    this.location = {
      latitude: this.house.coords.lat,
      longitude: this.house.coords.lon,
      mapType: "roadmap",
      zoom: 14,
      marker: {
        lat: this.house.coords.lat,
        lon: this.house.coords.lon
      }
    };

    // this.atoB = new AtoB(52.5332685, 13.4017932,
    //   this.house.coords.lat, this.house.coords.lon)

    // this.directionsService.calculateRoute(this.atoB).subscribe(data => {
    //   this.house.routes = data["routes"];
    //   console.log(this.house.routes);
    // });
  }
}
