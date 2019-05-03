import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  

  constructor() { }
  
  handleToken(token)
  {
    this.setToken(token);
    //console.log(this.isValid());
  }
  handleId(id)
  {
    this.setId(id)
  }

  setToken(token)
  {
    localStorage.setItem('token',token);
  }
  setId(id)
  {
    localStorage.setItem('id',id);
  }
  get()
  {
    return localStorage.getItem('token');
  }
  getId()
  {
    return localStorage.getItem('id');
  }
  remove()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    localStorage.removeItem('id');
  }

  // isValid()
  // {
  //   const token = this.get().split('.')[1];
  //   if(token)
  //   {
  //     const payload = JSON.parse(atob(token));
  //     if(payload)
  //     {
  //       return payload.iss === 'http://localhost:8000/users/login' ? true : false;
  //     }
  //   }
  // }

  loggedIn()
  {
    if(this.get())
    {
      return true;
    }else
    {
      return false;
    }
  }

  //For Admin handle
  handleAdmin(admin)
  {
    this.setAdmin(admin);
    //console.log(this.isValid());
  }

  setAdmin(admin)
  {
    localStorage.setItem('admin',admin);
  }
  getAdmin()
  {
    return localStorage.getItem('admin');
  }




  IsAdmin()
  {
    if(this.getAdmin() == "1")
    {
      return true;
    }else
    {
      return false;
    }
  }
}
