import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXLaunch } from '../models/spacex-launch.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getMissions(): Observable<any> {
    return this.http.get<SpaceXLaunch>(this.apiUrl);
  }
  getMissionsByYear(year: string): Observable<SpaceXLaunch[]> {
    return this.http.get<SpaceXLaunch[]>(`${this.apiUrl}?launch_year=${year}`);
  }
}
