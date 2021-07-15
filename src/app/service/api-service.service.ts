import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url : string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPeoples(): Observable<any>{
    return this.http.get<any>(this.url+'people/');
  }

  getStarships(): Observable<any>{
    return this.http.get<any>(this.url+'starships/');
  }

  getPlanets(): Observable<any>{
    return this.http.get<any>(this.url+'planets/');
  }
}
