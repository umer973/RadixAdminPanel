import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  postFile(fileToUpload: File) {

    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.url + "UploadFile", formData, { headers: headers });
  }
  /*Partners*/
  insertPartners(body){
    let headers= new Headers({'Accept':'Application/json'}) ;
    return this.http.post(this.url + "SavePartners",body)
   }
}
