import { Component, OnInit, OnChanges } from "@angular/core";
import { HouseService } from "src/app/services/houseService";
import { House } from "../house.model";
import { FilterType } from "src/app/model/filterType.enum";

@Component({
  selector: "app-house-list",
  templateUrl: "./house-list.component.html",
  styleUrls: ["./house-list.component.css"]
})
export class HouseListComponent implements OnInit {
  familyHouse: House[];
  loading: boolean;
  filterType: any;
  constructor(private houseServcie: HouseService) {}

  ngOnInit() {
    this.filterType = FilterType.Rooms;
    this.houseServcie.getHouses().subscribe(houses => {
      this.familyHouse = houses["houses"];
    });
  }

  filter(value) {
    this.filterType = FilterType[value];
  }
}
