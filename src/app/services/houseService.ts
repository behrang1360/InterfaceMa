import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../house/house.model';

@Injectable({
  providedIn: "root"
})
export class HouseService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.baseUrl);
  }


}
