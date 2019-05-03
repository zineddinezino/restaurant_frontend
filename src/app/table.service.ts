import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http : HttpClient) { }
  elements: any = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json'
    })
  };

  //  postTabData(capacity){
  //   return this.http.post('http://localhost:8000/info/table',{'capacity':capacity},this.httpOptions);
  // }
  postTabData(data){
    return this.http.post('http://localhost:8000/info/table',{'capacity':data.value},this.httpOptions);
  }
  postTab(capa){
    return this.http.post('http://localhost:8000/info/table?capacity='+capa,this.httpOptions);
  }

  
}
