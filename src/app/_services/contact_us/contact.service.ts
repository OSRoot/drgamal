import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env} from '../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http:HttpClient) { }
  sendMessage( formData: FormData ):Observable<any> {
    return this.http.post<any>(`${env.ApiUrl}/contactus/store`, formData)
  }
}
