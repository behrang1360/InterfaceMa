import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { House } from "../house/house.model";
import { Observable } from "rxjs";
import { HouseService } from "../services/houseService";

export class HouseListResolver implements Resolve<House[]> {
  constructor(private houseService: HouseService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<House[]> {
    return null;
  }
}
