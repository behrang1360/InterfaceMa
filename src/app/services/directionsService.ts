import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { AtoB } from '../model/AtoB.model';

@Injectable({
  providedIn: "root"
})
export class DirectionsService {
  constructor(private http: HttpClient) { }

  calculateRoute(distance: AtoB): Observable<any> {


    return this.http
      .get(`${environment.googleDirectionPath}origin=${distance.fromLat},${distance.fromLon}
      &destination=${distance.toLat},${distance.toLon}&key=${environment.googleApiKey}&mode=driving`);
  }
}
