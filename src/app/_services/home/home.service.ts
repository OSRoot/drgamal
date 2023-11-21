import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment as env} from '../../../environments/environment';
import { Home } from 'src/app/interfaces/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  home(): Observable<Home> {
    return this.http.get<Home>(`${env.ApiUrl}/home/all`);
  }

}
