import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXLaunch } from '../models/spacex-launch.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private apiUrl = 'https://api.spacexdata.com/v3/launches'; 

  constructor(private http: HttpClient) {}

  // Method to fetch mission details by flight number
  getMissionDetails(flightNumber: string): Observable<SpaceXLaunch> {
    return this.http.get<SpaceXLaunch>(`${this.apiUrl}/${flightNumber}`);
  }
}
