import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievements } from 'src/app/interfaces/achievements';
import {environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchivementsService {

  constructor(private http: HttpClient) { }

  all_achievements(): Observable<Achievements> {
    return this.http.get<Achievements>(`${env.ApiUrl}/achievements`);
  }
}
