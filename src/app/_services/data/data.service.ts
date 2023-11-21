import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API:string = environment.ApiUrl;
  constructor(
    private http:HttpClient
  ) { }



  getData(endPoint:string):Observable<any>{
    return this.http.get(`${this.API}/${endPoint}`).pipe(take(1));
  }

}
