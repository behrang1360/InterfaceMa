import { Component, OnInit } from "@angular/core";
import { HouseService } from "src/app/services/houseService";
import { House } from "../house.model";

@Component({
  selector: "app-house-list",
  templateUrl: "./house-list.component.html",
  styleUrls: ["./house-list.component.css"]
})
export class HouseListComponent implements OnInit {
  familyHouse: House[];
  loading: boolean;
  constructor(private houseServcie: HouseService) {}

  ngOnInit() {
    this.houseServcie.getHouses().subscribe(houses => {
      this.familyHouse =  houses["houses"]
    });
  }
}
