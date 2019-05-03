import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // try to get the token from the service
  // set the token in the header and send it in the get
  constructor(private http : HttpClient,private token : TokenService) { }
  //Authorization: `Bearer ${this.token.get()}

  // headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // headers.append('projectid', this.id);
  id = this.token.getId();
  elements : any = [];
  httpOptions = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json',
      'Authorization': '${this.token.get()}'
    })
  };
  //for tables
  getData()
  {
    
    return this.http.get('http://localhost:8000/info/table',this.httpOptions);
  }
  get()
  {
    return this.http.get('http://localhost:8000/info/table',this.httpOptions).toPromise();
  }

  Update(id,size)
  {
    return this.http.put('http://localhost:8000/info/table/'+id+'/size/'+size,this.httpOptions);
  }

  DeleteTab(id)
  {
    return this.http.delete('http://localhost:8000/info/table/'+id);
  }
  //for reservation
  getRes()
  {
    return this.http.get('http://localhost:8000/booking/res/'+this.id);
  }
  DeleteRes(Id)
  {
    return this.http.delete('http://localhost:8000/booking/del/'+Id);
  }
  getBookingList()
  {
    return this.http.get('http://localhost:8000/booking/res',this.httpOptions);
  }

  //for users
  getUser()
  {
     
    return this.http.get('http://localhost:8000/users/view/'+this.id);
  }

  //for Time

  getTime()
  {
    return this.http.get('http://localhost:8000/api/worktime');
  }

  getSchedule()
  {
    return this.http.get('http://localhost:8000/api/schedule');
  }

  update(id,start,end)
  {
    console.log(id);
    return this.http.put('http://localhost:8000/api/worktime',{'id':id,'start' : start,'end' : end},this.httpOptions);
  }

  delete(id)
  {
    return this.http.delete('http://localhost:8000/api/worktime/'+id);
  }
}
