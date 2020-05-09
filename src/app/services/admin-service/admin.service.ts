import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl =`${environment.host}/admin`;
  constructor(  private http: HttpClient) { }

  public signUpStudent(data:any):Observable<any>{
    return this.http.post<any>(`${this.adminUrl}/studentSignup`,data);

  }

  
}
