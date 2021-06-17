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

  /*------Partners-----*/
  /*on load partners*/
  GetPartners() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + "GetPartners", { headers: headers });
  }
  /*Partners*/
  insertPartners(body){
    let headers= new Headers({'Accept':'Application/json'}) ;
    return this.http.post(this.url + "SavePartners",body)
   }

   /* LOADING MENUS */
  getMenus() {

    const Menus = [
      {
        "MenuID": 1, "MenuName": "About Us", "path": "",
      },
      {
        "MenuID": 2, "MenuName": "File Upload", "path": "",
      },
      {
        "MenuID": 3, "MenuName": "Other Pages", "path": "",
        "Pages": [
            { "path": "page2", "PageName": "Testimonials" },
            { "path": "page2", "PageName": "Clients" },
            { "path": "page2", "PageName": "Partners" }
        ]
      },
    ]
    return Menus;
  }
}
