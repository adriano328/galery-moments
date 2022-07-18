import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoment } from '../components/IMoment';
import {IResponse} from '../components/IResponse'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(
    private http: HttpClient
     ) { }

  createMoment(formData:FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  getMoments(): Observable<IResponse<IMoment[]>>{
    return this.http.get<IResponse<IMoment[]>>(this.apiUrl);
  }

  getMoment(id: number):Observable<IResponse<IMoment>>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<IResponse<IMoment>>(url);
  }

  removeMoment(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<IResponse<IMoment>>(url);
  }


}
