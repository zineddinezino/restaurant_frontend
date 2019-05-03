import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http : HttpClient) { }


  httpOptions = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json',
    })
  };

  postAPIData(id_user,size, period){
    return this.http.post('http://localhost:8000/booking/res', 
    {'id_user' :id_user, 'size' :size,'period' :period},this.httpOptions
    );
  }
}
