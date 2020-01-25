import { Component, OnInit, Input } from "@angular/core";
import { House } from "./house.model";

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.css"]
})
export class HouseComponent implements OnInit {
  @Input() house: House;

  constructor() {}

  location: Location;

  ngOnInit() {
    this.location = {
      latitude: this.house.coords.lat,
      longitude: this.house.coords.lon,
      mapType: "roadmap",
      zoom: 14,
      marker: {
        lat: this.house.coords.lat,
        lng: this.house.coords.lon
      }
    };
  }
}
interface Marker {
  lat: number;
  lng: number;
}
interface Location {
  latitude: number;
  longitude: number;
  mapType?: string;
  zoom?: number;
  marker: Marker;
}
