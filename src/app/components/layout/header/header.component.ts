import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor(private route:Router) {

  }
  navigate_upload(){
    this.route.navigate(['dashboard/fileupload'])
  }
  navigate() {
    this.route.navigate(['dashboard/testimonials'])
  }
  navigate2() {
    this.route.navigate(['dashboard/'])
  }
  navigate3() {
    this.route.navigate(['dashboard/partner'])
  }
  
}
