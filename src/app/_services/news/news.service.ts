import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewDetails, News } from 'src/app/interfaces/news';
import {environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  all_news(): Observable<News> {
    return this.http.get<News>(`${env.ApiUrl}/news`);
  }

  news_details(id:string): Observable<NewDetails> { //Home
    return this.http.get<NewDetails>(`${env.ApiUrl}/news/show/${id}`);
  }

}
