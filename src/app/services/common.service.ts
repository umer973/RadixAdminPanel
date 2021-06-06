import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  url = environment.API_URl

  GetInitialData() {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + "GetEnquiry", { headers: headers });
  }

}
