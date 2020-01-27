import { Component, OnInit, Input } from "@angular/core";
import { House } from "./house.model";
import { Location } from "../model/location.model";
import { DirectionsService } from "../services/directionsService";
import { AtoB } from "../model/AtoB.model";
import { FilterType } from '../model/filterType.enum';

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.css"]
})
export class HouseComponent implements OnInit {
  @Input() house: House;
  @Input() filterType: FilterType


  constructor(private directionsService: DirectionsService) { }

  location: Location;
  distance: string;

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



    this.atoB = new AtoB(52.5418739, 13.4057378,
      this.house.coords.lat, this.house.coords.lon)

    this.directionsService.calculateRoute(this.atoB).subscribe(data => {
      this.house.routes = data["routes"];
      this.distance =this.house.routes[0].legs[0].distance.text;
      this.house.distance = this.house.routes[0].legs[0].distance.value;

      }, error => console.log('oops', error));
     
  }
}
