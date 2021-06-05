import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url= environment.API_URl

  PostLogin(body: any) {

    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(this.url+"Login",body,{headers:headers});
  }
}
