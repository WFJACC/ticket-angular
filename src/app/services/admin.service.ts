import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environments';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private myAppUrl: string;
  private adminApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.adminApiUrl = 'api/admins'
  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.myAppUrl}${this.adminApiUrl}`);
  }

}
