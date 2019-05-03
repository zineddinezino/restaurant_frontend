import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendingService {

  private baseUrl = 'http://localhost:8000/users';
  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get('http://localhost:8000/booking/res');
  }
  signup(data){
    return this.http.post(`${this.baseUrl}/add`,data);
  }
  login(data){
    return this.http.post(`${this.baseUrl}/login`,data);
  }
}
