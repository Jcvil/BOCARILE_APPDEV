import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poulation } from './model/model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPopulation(): Observable<Poulation[]> {
    return this.http.get<any>('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest').pipe(map(response  => {
      return response.data as Poulation[];
    }))
  }
}
